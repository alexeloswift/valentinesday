import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "root"), // Change "src" to "app" if your files are inside "app"
    },
  },
});
