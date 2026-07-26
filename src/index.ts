import { Elysia } from "elysia";
import { v1 } from "@/v1";
import { env } from "@/config/env";

const health = {
  success: true,
  status: "Running",
};

const app = new Elysia()
  .get("/", () => health)
  .get("/health", () => health)
  .use(v1);

if (env.NODE_ENV === "development") {
  app.listen(env.PORT, (server) => {
    console.log(
      `Server is running at http://${server?.hostname}:${server?.port}`,
    );
  });
}

export default app;
