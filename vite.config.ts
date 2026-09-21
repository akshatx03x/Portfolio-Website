import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@splinetool")) {
              return "vendor-spline";
            }
            if (id.includes("framer-motion")) {
              return "vendor-framer";
            }
            if (id.includes("react-github-calendar")) {
              return "vendor-github-cal";
            }
            if (id.includes("lucide-react")) {
              return "vendor-lucide";
            }
            if (id.includes("@radix-ui") || id.includes("cmdk") || id.includes("vaul")) {
              return "vendor-ui";
            }
            if (id.includes("recharts")) {
              return "vendor-recharts";
            }
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom")) {
              return "vendor-core";
            }
          }
        },
      },
    },
  },
}));
