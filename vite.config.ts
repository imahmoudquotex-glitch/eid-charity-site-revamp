import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
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
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": ["@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-tooltip"],
          "query": ["@tanstack/react-query"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react", "lucide"],
  },
}));
