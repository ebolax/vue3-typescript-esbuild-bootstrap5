const esbuild = require("esbuild");
const vuePlugin = require("esbuild-plugin-vue3");

const args = process.argv.slice(2);

let watch = args[0] === "dev";
let minify = args[0] === "prod";

esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    watch,
    minify,
    outfile: "dist/index.js",
    plugins: [vuePlugin()]
});