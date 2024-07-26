import {defineConfig} from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/my-panel.ts",
      formats: ["es"]
    },
    rollupOptions: {
      external: /^lit/
    }
  }
});
