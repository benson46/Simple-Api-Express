import express from "express";
import router from "./routes/userRotues";
import errorHandlingMiddleware from "./utils/errorHandlingMiddleware";
import { logger } from "./utils/logger";

const app = express();
const port = 3000;



app.use(express.json());
app.use(logger)

app.use("/api", router);

app.use(errorHandlingMiddleware);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
