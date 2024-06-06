import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const jsFiles = Object.fromEntries(
  globSync('src/**/*.js', { ignore: ['node_modules/**','**/modules/**','**/dist/**,']}).map(file => [
    path.relative(
      'src/assets/',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const scssFiles = Object.fromEntries(
  globSync('src/**/*.scss', { ignore: ['src/**/_*.scss'] }).map(file => [
    path.relative(
      'src/assets/',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const inputObject = { ...scssFiles, ...jsFiles };

export default defineConfig({
  root: './src',
  publicDir: './public',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: inputObject,
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      },
    },
  },
  plugins: [
    sassGlobImports(),
  ],
  server: {
    port: 3000,
    watch: {
		  usePolling: true,
      extraWatchFiles: ['./public/**'],
	  },
  }
});
