import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig({
  plugins: [sveltekit(), visualizer({ open: true })],
  resolve: {
    alias: {
      $scss: path.resolve("./src/scss"),
    },
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
});
