import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["sjdjfjfueo"] }));
app.use(router);

app.listen(3000, () => {
  console.info("Server started on port 3000");
});
