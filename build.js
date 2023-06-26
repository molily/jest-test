import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';
import {
  dirname,
  join,
} from 'path';
import sveltePreprocess from 'svelte-preprocess';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));

const buildDir = join(currentDir, "./dist/");

const entryFilename = "renderHelloWorld.js";
const entryPath = join(currentDir, entryFilename);

await Promise.all([
  esbuild.build({
    entryPoints: [entryPath],
    outdir: buildDir,
    bundle: true,
    format: "esm",
    sourcemap: "inline",
    plugins: [
      // https://github.com/EMH333/esbuild-svelte
      sveltePlugin({
        preprocess: sveltePreprocess(),
        // https://svelte.dev/docs#compile-time-svelte-compile
        compilerOptions: {
          // Include CSS in the files
          css: true,
        },
      }),
    ],
  }),
]);
