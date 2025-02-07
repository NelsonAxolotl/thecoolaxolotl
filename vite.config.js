import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [react(), compression()],
  build: {
    minify: "terser",
    sourcemap: false, // Désactive les sourcemaps en production pour réduire le poids des fichiers
    brotliSize: false, // Désactive le calcul des tailles Brotli pour améliorer la vitesse de build
    chunkSizeWarningLimit: 500, // Évite les warnings inutiles pour les gros fichiers
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react"; // Sépare React dans un fichier dédié
            if (id.includes("three")) return "three"; // Ex. pour Three.js
            return "vendor"; // Mettre les autres dépendances dans "vendor"
          }
        },
      },
    },
  },
  assetsInclude: ["**/*.mp4", "**/*.webp", "**/*.woff2"], // Gère les assets volumineux
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
