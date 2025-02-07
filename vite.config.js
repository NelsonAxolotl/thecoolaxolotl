import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression()],
  build: {
    minify: "terser",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
