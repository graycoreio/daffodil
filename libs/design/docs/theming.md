### Step 1: Add the path to your angular configuration file.
So inside your project `angular.json` insert the following inside `projects.project-name.architect.build.options`

```json
"stylePreprocessorOptions": {
              "includePaths": [
                "./node_modules/@daffodil/design"
              ]
            }
```
### Step 2: Import the style sheets inside of your projects global styling sheet.

In your project's global style sheet(typically styles.scss in the root directory) add

```scss
@import 'daff-typography';
@import 'daff-theme';

$primary: daff-configure-palette($daff-yellow, 60);
$secondary: daff-configure-palette($daff-purple, 60);
$tertiary: daff-configure-palette($daff-blue, 60);

$theme: daff-configure-theme($primary, $secondary, $tertiary, "light");

@include daff-theme($theme);
```
### Now all of Daffodil's styling tools will be available to you in your projects