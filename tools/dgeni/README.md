# Daffodil Documentation Tooling via Dgeni

Documentation for the `@daffodil` project is generated via [dgeni](https://github.com/angular/dgeni). Generally speaking, documentation for a particular package is stored alongside that package. We utilize `dgeni` to hoist and transform that documentation into a `docs` package that is published along with the `@daffodil/daffio` app.

## Generating documentation

```bash
lerna run build --scope="@daffodil/tools-dgeni"
```

## Autogenerating documentation while doing dev work

```bash
lerna run watch --scope="@daffodil/tools-dgeni"
```