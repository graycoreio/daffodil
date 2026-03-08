// .github/actions/compute-schematic-matrix/src/main.ts
var import_fs2 = require("fs");
var import_path2 = require("path");

// .github/actions/compute-schematic-matrix/src/classify-changes.ts
var classifyChanges = (changedFiles2, config2) => {
  const flags = {
    shared: false,
    demoOnly: false,
    drivers: Object.fromEntries(Object.keys(config2.drivers).map((d) => [d, false]))
  };
  for (const file of changedFiles2) {
    if (!file) {
      continue;
    }
    if (config2.shared.some((p) => file.startsWith(p))) {
      flags.shared = true;
    }
    if (config2.demoOnly.some((p) => file.startsWith(p))) {
      flags.demoOnly = true;
    }
    for (const [driverName, paths] of Object.entries(config2.drivers)) {
      if (paths.some((p) => file.startsWith(p))) {
        flags.drivers[driverName] = true;
      }
    }
  }
  return flags;
};

// .github/actions/compute-schematic-matrix/src/path-config.ts
var import_fs = require("fs");
var import_path = require("path");
var SCHEMATIC_DIR = "tools/schematics";
var DAFFODIL_SCOPE = "@daffodil/";
var DEMO_DRIVER = "demo";
var readDriverNames = (repoRoot2) => {
  const schemaPath = (0, import_path.join)(repoRoot2, SCHEMATIC_DIR, "ng-add", "schema.json");
  const schema = JSON.parse((0, import_fs.readFileSync)(schemaPath, "utf-8"));
  return schema.properties?.driver?.enum ?? [];
};
var findDriverSubpaths = (libRoot, repoRoot2, knownDrivers) => {
  const found = /* @__PURE__ */ new Map();
  const driverDir = (0, import_path.join)(repoRoot2, libRoot, "driver");
  if ((0, import_fs.existsSync)(driverDir)) {
    for (const entry of (0, import_fs.readdirSync)(driverDir, { withFileTypes: true })) {
      if (entry.isDirectory() && knownDrivers.has(entry.name)) {
        found.set(entry.name, `${libRoot}/driver/${entry.name}/`);
      }
    }
  }
  const rootDir = (0, import_path.join)(repoRoot2, libRoot);
  if ((0, import_fs.existsSync)(rootDir)) {
    for (const entry of (0, import_fs.readdirSync)(rootDir, { withFileTypes: true })) {
      if (entry.isDirectory() && knownDrivers.has(entry.name) && !found.has(entry.name)) {
        found.set(entry.name, `${libRoot}/${entry.name}/`);
      }
    }
  }
  return found;
};
var derivePathConfig = (repoRoot2) => {
  const pkgJsonPath = (0, import_path.join)(repoRoot2, SCHEMATIC_DIR, "package.json");
  const pkgJson = JSON.parse((0, import_fs.readFileSync)(pkgJsonPath, "utf-8"));
  const devDeps = Object.keys(pkgJson.devDependencies || {}).filter((dep) => dep.startsWith(DAFFODIL_SCOPE));
  const knownDrivers = new Set(
    readDriverNames(repoRoot2).filter((d) => d !== DEMO_DRIVER)
  );
  const shared = [`${SCHEMATIC_DIR}/`];
  const drivers = {};
  const demoOnly = [];
  for (const dep of devDeps) {
    const pkgName = dep.slice(DAFFODIL_SCOPE.length);
    const libRoot = `libs/${pkgName}`;
    const driverPaths = findDriverSubpaths(libRoot, repoRoot2, knownDrivers);
    if (driverPaths.size === 0) {
      if (dep === `${DAFFODIL_SCOPE}dev-tools`) {
        demoOnly.push(`${libRoot}/`);
      } else {
        shared.push(`${libRoot}/`);
      }
    } else {
      shared.push(`${libRoot}/src/`);
      for (const [driverName, path] of driverPaths) {
        if (!drivers[driverName]) {
          drivers[driverName] = [];
        }
        drivers[driverName].push(path);
      }
    }
  }
  return { shared, drivers, demoOnly };
};

// .github/actions/compute-schematic-matrix/src/compute-matrix.ts
var driverEntry = (nodeVersion, angularVersion, driver) => ({
  node_version: nodeVersion,
  angular_version: angularVersion,
  driver,
  base: "scss-standalone",
  skip_package_json: false,
  routing: true,
  "ng-add-succeed": true,
  "build-succeed": true
});
var computeMatrixForVersion = (flags, config2, nodeVersion, angularVersion) => {
  const include = [];
  const entry = (driver) => driverEntry(nodeVersion, angularVersion, driver);
  const namedEntry = (name, overrides) => ({
    ...entry("in-memory"),
    name,
    ...overrides
  });
  const anyDriverChanged = Object.values(flags.drivers).some(Boolean);
  if (flags.shared || flags.demoOnly || anyDriverChanged) {
    include.push(entry(DEMO_DRIVER));
  }
  for (const driverName of Object.keys(config2.drivers)) {
    if (flags.shared || flags.drivers[driverName]) {
      include.push(entry(driverName));
    }
  }
  if (flags.shared || flags.drivers["in-memory"]) {
    include.push(namedEntry("skip-package-json", { skip_package_json: true, "build-succeed": false }));
    include.push(namedEntry("css-style-failure", { base: "css-standalone", "build-succeed": false }));
    include.push(namedEntry("no-app-routing", { routing: false }));
  }
  if (flags.shared) {
    include.push(namedEntry("module-app-rejection", { base: "scss-module", "ng-add-succeed": false }));
  }
  return include;
};
var computeMatrix = (changedFiles2, config2, nodeVersions2, angularVersions2) => {
  const hasChangedFiles = changedFiles2.some((f) => f.length > 0);
  const flags = hasChangedFiles ? classifyChanges(changedFiles2, config2) : {
    shared: true,
    demoOnly: true,
    drivers: Object.fromEntries(Object.keys(config2.drivers).map((d) => [d, true]))
  };
  return nodeVersions2.flatMap(
    (node) => angularVersions2.flatMap(
      (angular) => computeMatrixForVersion(flags, config2, node, angular)
    )
  );
};

// .github/actions/compute-schematic-matrix/src/main.ts
var repoRoot = (0, import_path2.join)(__dirname, "..", "..", "..", "..");
var config = derivePathConfig(repoRoot);
var changedFiles = (process.env["INPUT_CHANGED-FILES"] || "").split("\n");
var nodeVersions = (process.env["INPUT_NODE-VERSIONS"] || "").split(",").filter(Boolean);
var angularVersions = (process.env["INPUT_ANGULAR-VERSIONS"] || "").split(",").filter(Boolean);
var matrix = computeMatrix(changedFiles, config, nodeVersions, angularVersions);
var json = JSON.stringify(matrix);
var outputFile = process.env.GITHUB_OUTPUT;
if (outputFile) {
  (0, import_fs2.appendFileSync)(outputFile, `matrix=${json}
`);
  (0, import_fs2.appendFileSync)(outputFile, `has-entries=${matrix.length > 0}
`);
}
