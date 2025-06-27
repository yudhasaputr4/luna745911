// vite.config.ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal"

// Replit-specific plugin (optional & safe)
export default defineConfig(async () => {
  const replitPlugins =
    process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          (await import("@replit/vite-plugin-cartographer")).cartographer(),
        ]
      : []

  return {
    root: path.resolve(__dirname, "client"),
    plugins: [react(), runtimeErrorOverlay(), ...replitPlugins],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    build: {
      outDir: path.resolve(__dirname, "dist"), // ✅ hasil untuk GitHub Pages
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"], // ⛔ hidden files
      },
    },
  }
})