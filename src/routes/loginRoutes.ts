import { Request, Response, Router } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response): void => {
  res.send(`
    <form method="POST">
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" />
      </div>
        <button>Submit</submit>
    </form>
    `);
});

router.post("/login", (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;

  if (email && password && email === "hi@hi.com" && password === "password") {
    req.session = { loggedIn: true };

    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are now logged in</div>
        <a href="">Logout</a>
      </div>
      `);
  } else {

  }
});

export { router };
