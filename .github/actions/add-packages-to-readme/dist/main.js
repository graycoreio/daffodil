// .github/actions/add-packages-to-readme/src/main.ts
var import_fs = require("fs");
var import_path = require("path");

// .github/actions/add-packages-to-readme/src/package-table.ts
var TABLE_START = "<!-- AUTOGENERATE_PACKAGE_START -->";
var TABLE_END = "<!-- AUTOGENERATE_PACKAGE_END -->";
var TABLE_REGEX = new RegExp(`${TABLE_START}.*${TABLE_END}`, "s");
var buildRow = (packageName) => `| [@daffodil/${packageName}](/libs/${packageName}/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2F${packageName}/latest.svg)](https://npmjs.com/package/@daffodil/${packageName}) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)`;
var buildPackageTable = (packages2) => [
  TABLE_START,
  "| Package | Version | Stability |",
  "|---|---|---|",
  ...packages2.filter((pkg) => !pkg.private).map((pkg) => buildRow(pkg.name.replace("@daffodil/", ""))),
  TABLE_END
].join("\n");
var replacePackageTable = (readme, table) => readme.replace(TABLE_REGEX, table);

// .github/actions/add-packages-to-readme/src/main.ts
var workspace = process.env.GITHUB_WORKSPACE || process.cwd();
var libsPath = (0, import_path.join)(workspace, "libs");
var readmePath = (0, import_path.join)(workspace, "README.md");
var packages = (0, import_fs.readdirSync)(libsPath, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => (0, import_path.join)(libsPath, entry.name, "package.json")).filter((path) => (0, import_fs.existsSync)(path)).sort().map((path) => JSON.parse((0, import_fs.readFileSync)(path, "utf-8")));
(0, import_fs.writeFileSync)(readmePath, replacePackageTable((0, import_fs.readFileSync)(readmePath, "utf-8"), buildPackageTable(packages)));
