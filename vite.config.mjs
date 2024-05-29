import { defineConfig } from 'vite';
// import { ViteEjsPlugin } from "vite-plugin-ejs";
// import { viteStaticCopy } from 'vite-plugin-static-copy'
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const jsFiles = Object.fromEntries(
  globSync('src/**/*.js', { ignore: ['node_modules/**','**/modules/**','**/dist/**,']}).map(file => [
    path.relative(
      'src/',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const scssFiles = Object.fromEntries(
  globSync('src/**/*.scss', { ignore: ['src/**/_*.scss'] }).map(file => [
    path.relative(
      'src/',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const inputObject = { ...scssFiles, ...jsFiles };

export default defineConfig({
  root: './src',
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
  // resolve: {
  //   alias: {
  //     '@/': path.join(__dirname, './src/'),
  //   },
  // },
  plugins: [
    // ViteEjsPlugin(),
    sassGlobImports(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: path.resolve(__dirname, 'src/themes/wp-env-dev/index.php'),
    //       dest: path.resolve(__dirname, 'dist/'),
    //     },
    //   ]
    // }),
  ],
  server: {
    port: 3000
  }
});
