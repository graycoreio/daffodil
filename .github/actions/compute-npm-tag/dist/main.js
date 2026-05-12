// .github/actions/compute-npm-tag/src/main.ts
var import_fs = require("fs");
var import_path = require("path");

// .github/actions/compute-npm-tag/src/compute-npm-tag.ts
var computeNpmTag = (version) => version.includes("-") ? "next" : "latest";

// .github/actions/compute-npm-tag/src/main.ts
var workspace = process.env.GITHUB_WORKSPACE || process.cwd();
var pkgJson = JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(workspace, "package.json"), "utf-8"));
var tag = computeNpmTag(pkgJson.version);
var outputFile = process.env.GITHUB_OUTPUT;
if (outputFile) {
  (0, import_fs.appendFileSync)(outputFile, `npm_tag=${tag}
`);
}
