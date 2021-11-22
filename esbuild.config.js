/* global process */

import esbuild from "esbuild";
import vuePlugin from "esbuild-plugin-vue3";

const args = process.argv.slice(2);

const watch = args[0] === "dev";
const minify = args[0] === "prod";

esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    watch,
    minify,
    outfile: "dist/index.js",
    plugins: [vuePlugin()]
});
