import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createServer as createViteServer } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;

export async function createServer(
  root = resolve(__dirname, ".."),
  isProd = process.env.NODE_ENV === "production",
  hmrPort = 24678
) {
  const indexProd = isProd
    ? await import("fs/promises").then((fs) =>
        fs.readFile(resolve("dist/client/index.html"), "utf-8")
      )
    : "";

  const app = express();

  let vite;
  if (!isProd) {
    vite = await createViteServer({
      root,
      logLevel: isTest ? "error" : "info",
      server: {
        middlewareMode: true,
        hmr: {
          port: hmrPort,
        },
      },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(await import("compression").then((i) => i.default()));
    app.use(
      await import("serve-static").then((i) =>
        i.default(resolve("dist/client"), {
          index: false,
        })
      )
    );
  }

  return { app, vite, indexProd };
}
