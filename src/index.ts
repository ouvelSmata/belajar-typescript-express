import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response): void => {
  res.send(`
      <div>
        <h1>Hello There!</h1>
      </div>
      `);
});

app.listen(3000, () => {
  console.info("Server started on port 3000");
});
