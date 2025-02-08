import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import imagemin from "vite-plugin-imagemin"; // Importation du plugin imagemin

export default defineConfig({
  plugins: [
    react(),
    compression(),
    imagemin({
      // Configuration d'imagemin
      gifsicle: {
        optimizationLevel: 3,
        interlaced: true,
      },
      optipng: {
        optimizationLevel: 3,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.65, 0.9], // Contrôle de la qualité des PNG
        speed: 4,
      },
      svgo: {
        plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  build: {
    minify: "terser",
    sourcemap: false, // Désactive les sourcemaps en production pour réduire le poids des fichiers
    brotliSize: false, // Désactive le calcul des tailles Brotli pour améliorer la vitesse de build
    chunkSizeWarningLimit: 4096, // Évite les warnings inutiles pour les gros fichiers
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les console.log en prod
        drop_debugger: true, // Supprime les debuggers
      },
      output: {
        comments: false, // Supprime les commentaires
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react"; // Sépare React dans un fichier dédié
            if (id.includes("react-dom")) return "react-dom";
            if (id.includes("three")) return "three"; // Ex. pour Three.js
            return "vendor"; // Mettre les autres dépendances dans "vendor"
          }
        },
      },
    },
  },
  assetsInclude: ["**/*.mp4", "**/*.webp", "**/*.woff2"], // Gère les assets volumineux
  define: {
    // "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
