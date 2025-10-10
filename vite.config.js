import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path"; // ← needed for resolving HTML file paths

export default defineConfig({
  plugins: [
    tailwindcss(), // Register the Tailwind CSS plugin
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projects: resolve(__dirname, "projects.html"),
        services: resolve(__dirname, "services.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
