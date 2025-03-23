import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
      include: ["lib"],
    }),
  ],
  server: { port: 3000 },
  build: {
    lib: {
      entry: "lib/main.ts",
      name: "react-datetime-picker",
      fileName: "react-datetime-picker",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "reactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
