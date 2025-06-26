import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/',
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true,
//     sourcemap: true
//   },
//   server: {
//     open: true
//   }
// })



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
  
//   // Add these configurations for Docker
//   server: {
//     host: true, // needed for Docker Container port mapping
//     port: 5173, // you can keep this or change it
//     proxy: {
//       '/api': {
//         target: 'http://server:5000', // points to your backend service in Docker
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   },
  
//   // For production build
//   preview: {
//     port: 5173,
//     host: true
//   },
  
//   // Optional: Configure build output for Docker/Nginx
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true
//   }
// });