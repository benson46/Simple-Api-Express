import express from "express";
import router from "./routes/userRotues.js";
import errorHandlingMiddleware from "./utils/errorHandlingMiddleware.js";
import { logger } from "./utils/logger.js";

const app = express();
const port = 3000;



app.use(express.json());
app.use(logger)

app.use("/api", router);

app.use(errorHandlingMiddleware);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
