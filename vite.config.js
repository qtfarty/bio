import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "@glitchdotcom/vite-plugin-handlebars";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "build");

export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [
      handlebars({
        partialDirectory: resolve(__dirname, "layout"),
        settingsFile: "settings.json",
        helpers: {
          hostasclass: (value) => {
            try {
              return new URL(value, "http://localhost").hostname.replace(/\./g, "_");
            } catch (error) {
              return String(value).replace(/\W+/g, "_");
            }
          },
        },
        reloadOnPartialChange: true,
      }),
    ],
    root,
    build: {
      cssCodeSplit: false,
      outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(root, "index.html"),
          ja: resolve(root, "ja", "index.html"),
          now: resolve(root, "now.html"),
        },
      },
    },
    optimizeDeps: {
      exclude: ["./settings.json"],
    },
    server: {
      strictPort: true
    },
  };
});
