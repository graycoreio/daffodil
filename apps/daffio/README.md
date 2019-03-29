## Daff.io

### Prerequisites
* [Lerna](https://lernajs.io/) - `npm install --g lerna`.
* [Angular CLI](https://cli.angular.io/) - `npm install -g @angular/cli`

### Getting Started
1. `lerna run build`
2. `ng serve --project=daffio`
3. Navigate to `localhost:4200` in your browser of choice

### Building the docs
1. `npm install -g gulp`
2. `lerna run docs`

### Project Overview
Daff.io is the web application that explains the features of `@daffodil` and houses the documentation of all of the `@daffodil` packages. While each `@daffodil` package is responsible for generating its own docs, it is `@daffodil/daffio`'s responsibility to render the docs and make them viewable for other developers to utilize.

### Contributing to daff.io
Generally speaking, you don't want to depend directly on the source of a dependency when developing, as that can cause unexpected issues at build and deployment time, as well as downstream effects for the developers that depend on your libraries. Yet, there are instances when quick development cycles that don't require a full rebuild can drastically improve development efficiency. E.g. changing styles in a component library. 

For this reason, we have opted to create a secondary project `daffio-dev` which depends directly on the `@daffodil` libraries source. This can be utilized for rapid feature prototyping, but should be used sparingly. 

> daffio-dev does not support `lint`ing or `build`ing, it only serves the purposes of the internal `@daffodil` development team.

You can run this project via:

```
ng serve --project=daffio-dev
```