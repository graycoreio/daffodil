// .github/actions/deprecations/src/main.ts
var import_fs = require("fs");
var import_path2 = require("path");

// .github/actions/deprecations/src/deprecation.ts
var VERSION_REGEX = "\\d+\\.\\d+\\.\\d+";
var PRERELEASE_REMOVAL = 3;
var RELEASE_REMOVAL = 1;
var DEPRECATION_MESSAGE = "Deprecated in version";
var REMOVAL_MESSAGE = "Will be removed in version";
var HAS_ANNOTATION_REGEX = new RegExp(`${DEPRECATION_MESSAGE} ${VERSION_REGEX}\\. ${REMOVAL_MESSAGE} ${VERSION_REGEX}`);
var DEPRECATED_TAG_REGEX = /@deprecated([^*\n]*)(\n\*\/)?$/gm;
var getStableVersion = (version) => version.split("-")[0];
var getPrereleaseRemovalVersion = (rootVersion2) => [0, Number(rootVersion2.split(".")[1]) + PRERELEASE_REMOVAL, 0].join(".");
var getReleaseRemovalVersion = (rootVersion2) => [Number(rootVersion2.split(".")[0]) + RELEASE_REMOVAL, 0, 0].join(".");
var getRemovalVersion = (rootVersion2) => rootVersion2.startsWith("0") ? getPrereleaseRemovalVersion(rootVersion2) : getReleaseRemovalVersion(rootVersion2);
var buildAnnotation = (rootVersion2) => ` ${DEPRECATION_MESSAGE} ${rootVersion2}. ${REMOVAL_MESSAGE} ${getRemovalVersion(rootVersion2)}.`;
var annotateDeprecations = (content, rootVersion2) => content.replace(DEPRECATED_TAG_REGEX, (match, summary, end) => match.match(HAS_ANNOTATION_REGEX) ? match : `@deprecated${summary || ""}${buildAnnotation(rootVersion2)}${end || ""}`);
var hasRemovalMarker = (content, version) => content.includes(`${REMOVAL_MESSAGE} ${version}`);

// .github/actions/deprecations/src/ignore.ts
var import_path = require("path");
var parseGlobs = (input) => (input || "").split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("#"));
var isIgnored = (path, globs) => globs.some((glob) => (0, import_path.matchesGlob)(path, glob));

// .github/actions/deprecations/src/main.ts
var workspace = process.env.GITHUB_WORKSPACE || process.cwd();
var mode = process.env["INPUT_MODE"];
var ignore = parseGlobs(process.env["INPUT_IGNORE"]);
var libsPath = (0, import_path2.join)(workspace, "libs");
var rootVersion = getStableVersion(JSON.parse((0, import_fs.readFileSync)((0, import_path2.join)(workspace, "package.json"), "utf-8")).version);
var sourceFiles = (0, import_fs.readdirSync)(libsPath, { recursive: true, encoding: "utf-8" }).filter((path) => path.endsWith(".ts") && !path.endsWith(".spec.ts")).filter((path) => !isIgnored(import_path2.posix.join("libs", path.split(import_path2.sep).join(import_path2.posix.sep)), ignore)).map((path) => (0, import_path2.join)(libsPath, path));
switch (mode) {
  case "annotate":
    for (const path of sourceFiles) {
      const content = (0, import_fs.readFileSync)(path, "utf-8");
      const annotated = annotateDeprecations(content, rootVersion);
      if (annotated !== content) {
        (0, import_fs.writeFileSync)(path, annotated);
      }
    }
    break;
  case "check": {
    const removals = sourceFiles.filter((path) => hasRemovalMarker((0, import_fs.readFileSync)(path, "utf-8"), rootVersion));
    for (const path of removals) {
      console.error(`${path} contains a symbol that is marked for removal in this version (${rootVersion})`);
    }
    if (removals.length > 0) {
      process.exit(1);
    }
    break;
  }
  default:
    console.error(`Unknown mode: ${mode}`);
    process.exit(1);
}
