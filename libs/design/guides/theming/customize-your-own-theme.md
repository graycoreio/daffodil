# Customize your own theme
Daffodil allows you to define custom themes to match your brand’s visual style. This involves creating custom color palettes, configuring them, and applying them to your application.

## Create custom palettes
Create a palettes file with Sass maps that include hues from `10` to `100` in increments of 10. These palettes will be used for `$primary`, `$secondary`, and `$tertiary` colors.

**Example:**
```scss
$app-blue: (
  10: #ebf1ff,
  20: #c4d8ff,
  30: #9dbeff,
  40: #79a7ff,
  50: #548fff,
  60: #1f66ff,
  70: #093cf3,
  80: #001bcb,
  90: #00098a,
  100: #000033
);
```

## Configure palettes
Use the `daff-configure-palette` function to configure each palette and set a default hue.

| Argument         | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| `$color-palette` | The Sass map of colors to use (e.g., $app-blue).                               |
| `$hue`           | 	The hue number to select from the palette. Defaults to `60`.                  |

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-color-palettes' as palette; // your palettes file

$app-primary: daff-theme.daff-configure-palette(palette.$app-blue, 60);
$app-secondary: daff-theme.daff-configure-palette(palette.$app-green, 60);
$app-tertiary: daff-theme.daff-configure-palette(palette.$app-purple, 60);

$app-primary-dark: daff-theme.daff-configure-palette(palette.$app-blue, 50);
$app-secondary-dark: daff-theme.daff-configure-palette(palette.$app-green, 50);
$app-tertiary-dark: daff-theme.daff-configure-palette(palette.$app-purple, 50);
```

## Define themes
Use the `daff-configure-theme` function to to define light and dark themes.

| Argument | Description                              |
| -------- | ---------------------------------------- |
| `$primary` |The configured primary palette.         |
| `$secondary` | The configured secondary palette.    |
| `$tertiary` | The configured tertiary palette.      |
| `$mode` | The theme mode, either `light` or `dark`. |

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-color-palettes' as palette; // your palettes file

$app-primary: daff-theme.daff-configure-palette(palette.$app-blue, 60);
$app-secondary: daff-theme.daff-configure-palette(palette.$app-green, 60);
$app-tertiary: daff-theme.daff-configure-palette(palette.$app-purple, 60);

$theme: daff-theme.daff-configure-theme($app-primary, $app-secondary, $app-tertiary, 'light');

$app-primary-dark: daff-theme.daff-configure-palette(palette.$app-blue, 50);
$app-secondary-dark: daff-theme.daff-configure-palette(palette.$app-green, 50);
$app-tertiary-dark: daff-theme.daff-configure-palette(palette.$app-purple, 50);

$theme-dark: daff-theme.daff-configure-theme($app-primary-dark, $app-secondary-dark, $app-tertiary-dark, 'dark');
```

## Apply themes
Finally, include your custom themes in your global styles.scss file:

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-theme';

.daff-theme-light {
  @include daff-theme.daff-component-themes(app-theme.$theme-light);
}

.daff-theme-dark {
  @include daff-theme.daff-component-themes(app-theme.$theme-dark);
}
```