import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // ✅ تحسين دقة الـ module resolution
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  // ✅ إعدادات البناء للإنتاج
  build: {
    sourcemap: false,        // لا sourcemaps في الإنتاج — يحمي الكود
    minify: "esbuild",       // ضغط أسرع من terser
    cssMinify: true,
    chunkSizeWarningLimit: 600,
    assetsInlineLimit: 4096, // صور أصغر من 4KB تصبح base64
    rollupOptions: {
      output: {
        // Vite 8 expects function-form manual chunking with rolldown.
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("react-router-dom")) {
            return "react-vendor";
          }
          if (id.includes("@tanstack/react-query") || id.includes("@tanstack/query-core")) {
            return "query";
          }
          if (id.includes("@radix-ui/")) {
            return "ui-vendor";
          }
          return undefined;
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react", "lucide"],
  },
}));
