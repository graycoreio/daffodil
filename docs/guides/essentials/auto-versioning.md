# Driver Auto Versioning

## Overview

Daffodil drivers interface with platforms through their APIs. The spec of these APIs can and do change. This means that Daffodil needs to have multiple drivers for the same feature to support multiple versions of a platform. Not every feature package will need a new driver version for every platform version, meaning that the matrix of driver versions and platform version grows large and disparate.

### The Problem

The app dev is therefore responsible for 1. knowing which driver versions needs updates and 2. manually editing all of the driver imports to that new version when updating their platform to a new version. (2) is a fairly simple find and replace but (1) becomes quite a burdensome maintenance task.

### The Solution

Daffodil provides *auto versioned drivers* to solve this problem. An application can import from the auto driver (`@daffodil/<lib>/driver/<platform>/auto`) and there are Daffodil mechanisms to replace the auto driver's exports with that of the correct driver version.

The app specifies their platform versions and Daffodil enumerates all the driver versions available and selects the ones applicable to that platform version. A list of [`conditions`](https://nodejs.org/api/packages.html#conditional-exports) for those drivers versions is passed to the angular application builder, swapping out the auto driver exports for the ones referenced in `conditions`.

## Custom Drivers

Custom drivers can also make use of auto versioned features. To add support to a custom driver, do the following steps:
1. Add a `/driver/<platform>/auto` entrypoint to your package containing the custom drivers.
2. Add `exports` to `package.json` referencing each of your driver versions.
    1. Optionally use `eslint-plugin-daff-packages` to ensure that the exports are declared correctly.
3. Add the search path of the package, relative to `node_modules`, containing the drivers to the `packages` field of the builder options:
```json
{
  ...
  "builder": "@daffodil/commerce:application",
  "options": {
    ...
    "drivers": {
      "platform": "1.2.3"
    },
    "packages": [
      "@myorg/mypackage"
    ]
  }
}
```