import axios from "axios";

export const getOptions = async () => {
  const origins = await axios
    .get("http://localhost:3030/")
    .then((res) => res.data)
    .catch((err) => err);
  return origins;
};

export const getDestinations = async (origin) => {
  const destinations = await axios
    .get(`http://localhost:3030/destinations?id=${origin.id}`)
    .then((res) => res.data)
    .catch((err) => err);
  return destinations;
};

export const getResults = async ({ origin, destination, time }) => {
  const result = await axios
    .get(
      `http://localhost:3030/calculate?origin=${origin}&destination=${destination}&time=${time}`
    )
    .then((res) => res.data)
    .catch((err) => err);
  return result;
};
