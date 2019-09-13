# Daffodil Theming Installation Guide

## Theming Installation

If you’d like to find out more about how to use the library and how to take advantage of its capabilities, see the [theming overview](../theming.md).

> This setup assumes that you’ve already installed the `@daffodil/design` package.

**Add the package path to your angular configuration file**
Within your project's `angular.json` file, include the path to the `@daffodil/design` package inside of  `stylePreprocessorOptions.includePaths`:
```json
    
    "build": {
      "options": {
        "stylePreprocessorOptions": {
            "includePaths": [
                "./node_modules/@daffodil/design"
              ]
          }
      }
    }
   
```

**Import the SASS stylesheets in to your project's global stylesheet**
To make all of Daffodil's SASS styling utilities easily available, add the following code to your project's global stylesheet (typically `src/styles.scss`):
```scss    
    @import 'daff-theme';
```
## Configure Your Theme
Configure the global theme for the Daffodil components that will be used in your project.

```scss
    @import 'daff-theme';

    $primary: daff-configure-palette($daff-yellow, 60);
    $secondary: daff-configure-palette($daff-purple, 60);
    $tertiary: daff-configure-palette($daff-blue, 60);
    $theme: daff-configure-theme($primary, $secondary, $tertiary, 'light');

    @include daff-theme($theme);
```
> Note: This does not add the sass utilities into your individual component files. Those files are compiled by the Angular CLI separately, and currently need their own imports if you are planning on using the `daff-theme`  features within your component scss files.