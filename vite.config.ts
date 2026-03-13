import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages project site base path: https://freeoink.github.io/pig_museum/
  base: command === "build" ? "/pig_museum/" : "/"
}));
