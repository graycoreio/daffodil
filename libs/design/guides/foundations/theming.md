# Theming
Daffodil's theming capabilities enables you to customize `@daffodil/design` components to reflect your brand. A theme consists of custom color configurations that will work in dark and light themes.

## Custom Colors
:stop: Before you begin, read the [accessibility guide on color in `@daffodil/design`](./color.md#accessibility).

## Themes
Dark and light modes are supported in all `@daffodil/design` components. When a theme is not specified, Daffodil defaults to the `light` mode.

## Palettes
A palette is a collection of [perceptually uniform colors](https://programmingdesignsystems.com/color/perceptually-uniform-color-spaces/) with consistent contrast ratios. `@daffodil/design`'s color palettes are represented by a Sass map, with each value in a palette called a **hue**.

## Predefined palettes
`@daffodil/design` offers predefined palettes based on our brand guidelines. You can choose to use our palettes or define your own. No further configuration is needed in your `app-theme.scss` file if you choose to use `@daffodil/design`'s palettes. Below is an example of the structure of a predefined `@daffodil/design` palette.

```scss
$daff-blue: (
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

### Defining your own palettes
You can define your own palettes by creating a Sass map that matches the example from above. Your Sass maps must have hues from 10 to 100, with a step increment of 10.

### Setting up your custom theme file
Configure your application to support the custom palettes you created by adding the following to your `app-theme.scss` file:

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-color-palettes' as palette;

// These palettes describe the colors that make up the "theme" of the components.

$primary: daff-theme.daff-configure-palette(palette.$app-green, 60);
$secondary: daff-theme.daff-configure-palette(palette.$app-blue, 60);
$tertiary: daff-theme.daff-configure-palette(palette.$app-purple, 60);

$theme: daff-theme.daff-configure-theme($primary, $secondary, $tertiary, 'light');

$primary-dark: daff-theme.daff-configure-palette(palette.$app-green, 50);
$secondary-dark: daff-theme.daff-configure-palette(palette.$app-blue, 50);
$tertiary-dark: daff-theme.daff-configure-palette(palette.$app-purple, 50);

$theme-dark: daff-theme.daff-configure-theme($primary-dark, $secondary-dark, $tertiary-dark, 'dark');

$black: daff-theme.daff-map-deep-get($theme, 'core.black');
$white: daff-theme.daff-map-deep-get($theme, 'core.white');
$neutral: daff-theme.daff-map-deep-get($theme, 'core.neutral');
```

### Setting up the styles file with `@daffodil/design`'s theme
Use `@daffodil/design`'s theme module to the `styles.scss` file:

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
```

Create classes in the `styles.scss` file to include the `theme` module for `$theme` and `$theme-dark` variables. This will allow you to set a click event on a button to switch between modes. [View this setup in Stackblitz](https://stackblitz.com/edit/ng13-daffodil-design)

```scss
@use '@daffodil/design/scss/theme' as daff-theme;

.daff-theme-light {
	@include daff-theme.daff-theme(daff-theme.$theme);
}

.daff-theme-dark {
	@include daff-theme.daff-theme(daff-theme.$theme-dark);
}
```

### Setting up the styles file with your custom theme
Add `app-theme.scss` to the `styles.scss` file:

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-theme';
```

> These lines include theme variables and functions that will generate the theme CSS and style the components.

Create classes in the `styles.scss` file to include the `theme` module for `$theme` and `$theme-dark` variables. This will allow you to set a click event on a button to switch between modes. [View this setup in Stackblitz](https://stackblitz.com/edit/ng13-daffodil-design-custom-theme)

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-theme';

.daff-theme-light {
  @include daff-theme.daff-theme(app-theme.$theme);
}

.daff-theme-dark {
  @include daff-theme.daff-theme(app-theme.$theme-dark);
}
```
