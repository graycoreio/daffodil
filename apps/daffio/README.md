## Daff.io

### Prerequisites
* [Lerna](https://lernajs.io/) - `npm install --g lerna`.
* [Angular CLI](https://cli.angular.io/) - `npm install -g @angular/cli`

### Getting Started
1. Create a `.env` in your working directory with the absolute path to your daffodil project root set to `DAFF_ROOT`, e.g `echo "DAFF_ROOT=/workspace/daffodil" >> .env`
2. `lerna run build`
3. `ng serve --project=daffio`
4. Navigate to `localhost:4200` in your browser of choice

### Project Overview
Daff.io is the web application that explains the features of `@daffodil` and house the documentation of `@daffodil`.

### Contributing to daff.io
Generally speaking, you don't want to depend directly on the source of a dependency when developing, as that can cause unexpected issues at build and deployment time, as well as downstream effects for the developers that depend on your libraries. Yet, there are instances when quick development cycles that don't require a full rebuild can drastically improve development efficiency. E.g. changing styles in a component library.

For this reason, we have opted to create a secondary project `daffio-dev` which depends directly on the `@daffodil` libraries source. This can be utilized for rapid feature prototyping, but should be used sparingly.

> daffio-dev does not support `lint`ing or `build`ing, it only serves the purposes of the internal `@daffodil` development team.

You can run this project via:

```
ng serve --project=daffio-dev
```