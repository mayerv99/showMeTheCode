import { Response, Request } from "express";
import PrismaClient from "../database/prismaClient";

export const getFormData = async (req: Request, res: Response) => {
  const originData = await PrismaClient.phone.findMany();
  return res.status(200).send(originData);
};

export const getAvailableDestinations = async (req: Request, res: Response) => {
  const { id } = req.body;
  const availableDestinations = await PrismaClient.connections.findMany({
    where: { origin_id: id },
  });
  return res.status(200).send(availableDestinations);
};

export const calculateValues = (req: Request, res: Response) => {
  const { fees, time } = req.body;

  return res.status(200).send({
    withoutPlan: calculate(fees, time, 0),
    plan30: calculate(fees, time, 30),
    plan60: calculate(fees, time, 60),
    plan120: calculate(fees, time, 120),
  });
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
