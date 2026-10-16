// import dependencies
import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// import configuration
import { defaultRoutes } from "@/controllers/global/default";
import { CORS_ORIGIN } from "@/configuration";
import ErrorHandler from "@/utils/helpers/error-handler";
import BlockGetRequestBody from "@/utils/validators/global/block-get-request-body";
import ValidateRequestBody from "@/utils/validators/global/validate-http-request";

// import routes
import systemRoutes from "@/routes/system";
import userRoutes from "@/routes/user";

const app: Application = express();

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use(BlockGetRequestBody);
app.use(ValidateRequestBody);

export const registerRoutes = () => {
  app.use("/api/system", systemRoutes);
  app.use("/api/user", userRoutes);
  app.use("/", defaultRoutes);
  app.use(ErrorHandler);
};

export default app;
