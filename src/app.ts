import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import vehicleRoutes from "./routes/vehicles.routes";
import userRoutes from "./routes/users.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/vehicles", vehicleRoutes);

app.use(handleErrorMiddleware);

export default app;
