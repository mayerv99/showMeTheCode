import express from "express";
import cors from "cors";

import {
  getFormData,
  getAvailableDestinations,
  calculateValues,
} from "./controllers/formData";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3030;

app.get("/", (req, res) => getFormData(req, res));

app.get("/destinations", (req, res) => getAvailableDestinations(req, res));

app.get("/calculate", (req, res) => calculateValues(req, res));

app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`));
