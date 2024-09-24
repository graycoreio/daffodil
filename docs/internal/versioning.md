# Versioning


## Overview
Daffodil uses Lerna and Nx to organize all of its projects in a single root project, or monorepo. There is one `package.json` in the root directory that contains the dependencies and versions used throughout the entire monorepo, and also separate `package.json` files throughout the monorepo for the dependencies of each sub-project.

## The problem
The root `package.json` is updated to reflect updated versions of dependencies when the project changes. But with so many other `package.json` files interspersed throughout the project, manually tracking and updating each one on every change would be challenging. This presents a risk of conflicting versions.

## Our solution
For `package.json` files in individual projects, we use "0.0.0-PLACEHOLDER" instead of a version number initially. Then, upon release, we replace all instances of "0.0.0-PLACEHOLDER" with the proper version as dictated in the root `package.json`. The methods that perform this function are located in `tools/release/version/leaf-version.ts`.