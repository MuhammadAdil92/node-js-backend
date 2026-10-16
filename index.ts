import app, { registerRoutes } from "./app";
import http from "http";
import { connectToDatabase } from "./integration/database";
import { log } from "./utils/helpers/logger";
import { PORT } from "./configuration";

const server = http.createServer(app);

async function initApplication() {
  try {
    await connectToDatabase();
    registerRoutes();
    server.listen(Number(PORT), "0.0.0.0", () => {
      log.success(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    log.error(`Application initialization failed: ${error}`);
  }
}

void (async () => {
  try {
    await initApplication();
  } catch (error) {
    log.error(`Error during application startup: ${error}`);
  }
})();
