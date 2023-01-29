import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hi There!");
});

router.get("/login", (req: Request, res: Response): void => {
  res.send(`
    <form method="POST">
      <div>
        <label for="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" />
      </div>
        <button>Submit</submit>
    </form>
    `);
});

router.post("/login", (req: Request, res: Response): void => {
  const { username, password } = req.body;

  res.send(username + password);
});

export { router };
