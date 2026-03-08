# Compute Schematic Matrix

Computes the CI matrix for [`build-commerce-schematic.yml`](../../workflows/build-commerce-schematic.yml) based on which files changed in a PR.

## Usage

```yaml
- uses: ./.github/actions/compute-schematic-matrix
  id: matrix
  with:
    changed-files: ${{ steps.changed.outputs.files }}
```

### Inputs

| Name            | Required | Description                              |
| --------------- | -------- | ---------------------------------------- |
| `changed-files` | yes      | Newline-separated list of changed files  |

### Outputs

| Name          | Description                                    |
| ------------- | ---------------------------------------------- |
| `matrix`      | JSON array of matrix `include` entries          |
| `has-entries`  | `'true'` if the matrix has at least one entry  |

## How it works

Path configuration is **derived at runtime** from:

- `tools/schematics/package.json` `devDependencies` (which `@daffodil/*` packages the schematic depends on)
- `tools/schematics/ng-add/schema.json` `driver` enum (canonical driver names)
- Filesystem scanning for driver subdirectories under each dependency

This means adding a new driver or dependency to the schematic automatically updates the matrix without editing this action.

### Path classification

| Category         | Paths                                                       | Triggers                                                            |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------------------- |
| **Shared**       | `tools/schematics/`, `libs/core/`, `libs/*/src/`           | All matrix entries                                                  |
| **Driver**       | `libs/*/driver/<name>/`, `libs/driver/<name>/`              | `demo` + that driver's entry                                        |
| **In-memory**    | (same as driver, for `in-memory`)                           | `demo`, `in-memory`, `skip-package-json`, `css-style-failure`, `no-app-routing` |
| **Demo-only**    | `libs/dev-tools/`                                           | `demo` only                                                         |

### Matrix entries

| Entry                  | Driver    | Description                                                        |
| ---------------------- | --------- | ------------------------------------------------------------------ |
| `demo`                 | demo      | All driver providers with dynamic switching via dev-tools           |
| `magento`              | magento   | Static magento driver                                              |
| `shopify`              | shopify   | Static shopify driver                                              |
| `in-memory`            | in-memory | Static in-memory driver                                            |
| `skip-package-json`    | in-memory | Tests `--skip-package-json` flag (expects build failure)           |
| `module-app-rejection` | in-memory | Tests non-standalone app rejection (expects ng-add failure)        |
| `css-style-failure`    | in-memory | Tests unsupported CSS style (expects build failure)                |
| `no-app-routing`       | in-memory | Tests `--routing=false`                                            |

## Development

```bash
# Build the action
nx build compute-schematic-matrix

# Run tests
nx test compute-schematic-matrix
```
