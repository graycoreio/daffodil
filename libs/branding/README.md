# @daffodil/branding

`@daffodil/branding` is a library of components used across the `@daffodil` apps. It centralizes things like licensing, copyright and logos so that they can be consistently used across the apps.

`@daffodil/branding` is NOT a published library, so you shouldn't expect to find it on the npm registry.

## Installation Instructions

There are a few steps to use this library in your app. Do note that we intend to turn this into an `ng add` schematic for simplicity, but this will work in the near-term.

1. Add the package to your apps `devDependencies`.
2. Add the following to your apps `angular.json`


```json
myproject.architect.build.options.assets
{ "glob": "**/*", "input": "libs/branding/src/assets/", "output": "/assets/daff-branding/" }
```

```json
myproject.architect.build.options.stylePreprocessorOptions.includePaths
"libs/branding/src/scss"
```
 
After this, you will be able to use the components in your app. 

## Themeing
If your app utilizes themeing, you can theme supporting components by taking advantage of the SCSS mixins supplied in `src/scss/daff-branding-theme.scss`. 

