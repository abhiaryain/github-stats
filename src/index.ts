import { Elysia } from "elysia";
import { env } from "@/config/env";

const health = {
  success: true,
  status: "Running",
};

const app = new Elysia().get("/", () => health).get("/health", () => health);

if (env.NODE_ENV === "development") {
  app.listen(env.PORT, (server) => {
    console.log(
      `Server is running at http://${server?.hostname}:${server?.port}`,
    );
  });
}

export default app;
