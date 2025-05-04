import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {
          screens: {
            lg: "1051px", // Custom breakpoint at 1051px
          },
        },
      },
    }),
  ],
});
