import { Response, Request } from "express";
import PrismaClient from "../database/prismaClient";

export const getFormData = async (req: Request, res: Response) => {
  const originData = await PrismaClient.phone.findMany();
  return res.status(200).send(originData);
};

export const getAvailableDestinations = async (req: Request, res: Response) => {
  if (req.query && req.query.id) {
    const id = (req.query as any).id;
    const availableDestinations = await PrismaClient.connections
      .findMany({
        where: { origin_id: parseInt(id) },
      })
      .then((item) => item.map((el) => el.destination_id));

    const destinations = await PrismaClient.phone.findMany({
      where: {
        id: <any>{ in: availableDestinations },
      },
    });
    console.log(destinations);

    return res.status(200).send(destinations);
  }
};

export const calculateValues = async (req: Request, res: Response) => {
  if (
    req.query &&
    req.query.origin &&
    req.query.destination &&
    req.query.time
  ) {
    const origin_id = (req.query as any).origin;
    const destination_id = (req.query as any).destination;
    const time = (req.query as any).time;

    const connectionData: any = await PrismaClient.connections.findMany({
      where: {
        origin_id: parseInt(origin_id),
        destination_id: parseInt(destination_id),
      },
    });

    return res.status(200).send({
      withoutPlan: calculate(connectionData[0].fees, time, 0),
      plan30: calculate(connectionData[0].fees, time, 30),
      plan60: calculate(connectionData[0].fees, time, 60),
      plan120: calculate(connectionData[0].fees, time, 120),
    });
  }
};

const calculate = (fees: number, time: number, plan: number) => {
  if (time < plan) {
    return 0;
  }
  if (plan === 0) {
    return fees * time;
  }
  return fees * 1.1 * (time - plan);
};
