import dotenv from "dotenv";
import path from "path";

const nodeEnv = process.env.NODE_ENV || "local";
const platformPort = process.env.PORT;
const envFilePath = path.resolve(
  process.cwd(),
  "environments",
  `${nodeEnv}.env`
);

const { error } = dotenv.config({ path: envFilePath });

if (error) {
  throw new Error(`Failed to load environment file: ${envFilePath}`);
}

const {
  MONOGODB_CONNECTION_STRING,
  CORS_ORIGIN,
  JWT_SECRET,
  JWT_EXPIRES_IN,
} = process.env;

// Azure App Service injects PORT; use it over .env file values
const PORT = platformPort || process.env.PORT || "8080";

if (
  !PORT ||
  !MONOGODB_CONNECTION_STRING ||
  !CORS_ORIGIN ||
  !JWT_SECRET ||
  !JWT_EXPIRES_IN
) {
  throw new Error("Missing required environment variables");
}

export {
  PORT,
  MONOGODB_CONNECTION_STRING,
  CORS_ORIGIN,
  JWT_SECRET,
  JWT_EXPIRES_IN,
};
