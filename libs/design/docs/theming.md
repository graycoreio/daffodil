# Theming

The **daff-theme** utility library is for theming the daffodil
design library. It contains many useful mixins, functions, 
and variables.

## Step 1: Add the path to your angular configuration file.
Within your project's `angular.json`, append the following to the key `projects.project-name.architect.build.options`

```json
"build":{
  "options":{
    "stylePreprocessorOptions": {
        "includePaths": [
            "./node_modules/@daffodil/design"
          ]
      }
  }
}
```
## Step 2: Import the style sheets inside of your project's global styling sheet.

In your project's global style sheet (typically `styles.scss` in the project's root directory; e.g.`src/` or `projects/my-project/src`), add the following code for all of Daffodil's styling tools to be available.

```scss
@import 'daff-typography';
@import 'daff-theme';

$primary: daff-configure-palette($daff-yellow, 60);
$secondary: daff-configure-palette($daff-purple, 60);
$tertiary: daff-configure-palette($daff-blue, 60);

$theme: daff-configure-theme($primary, $secondary, $tertiary, "light");

@include daff-theme($theme);
```