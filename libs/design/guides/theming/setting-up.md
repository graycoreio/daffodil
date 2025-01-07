# Setting up your theme
Daffodil's theming capabilities enable you to customize `@daffodil/design`'s component color styles to reflect your brand or product.

## Overview
Themes allow you to customize `@daffodil/design` components to match your brand or product's visual style using a set of universal variables, eliminating the need for individual component modifications.

## Before you begin
`@daffodil/design` is built with [Sass](https://sass-lang.com/). You should be familiar with the basics of CSS and Sass, including variables, functions, and mixins.

## Modes
Dark and light modes are supported in all `@daffodil/design` components. When a mode is not specified, Daffodil defaults to the `light` mode.

## Palettes
A palette is a collection of [perceptually uniform colors](https://programmingdesignsystems.com/color/perceptually-uniform-color-spaces/) with consistent contrast ratios. `@daffodil/design`'s color palettes are represented by a Sass map, with each value in a palette called a **hue**.

`@daffodil/design` includes three core palettes that reflect our brand identity, three palettes used to indicate status, and a neutral palette that is dominant throughout the design system. You can choose to use our palettes or define your own.

## Defining a theme

### Using Daffodil's default theme

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
```

Create classes in the `styles.scss` file to include the `daff-theme` mixin for `$theme` and `$theme-dark` variables. This will allow you to set a click event on a button to switch between modes. View this setup in [Stackblitz](https://stackblitz.com/edit/ng13-daffodil-design).

```scss
@use '@daffodil/design/scss/theme' as daff-theme;

.app-theme-light {
	@include daff-theme.daff-theme(daff-theme.$theme);
}

.app-theme-dark {
	@include daff-theme.daff-theme(daff-theme.$theme-dark);
}
```

### Customizing your own theme

#### Create custom palettes
Create a palettes file that includes Sass maps that can be used as `$primary`, `$secondary`, and `$teritary` colors. Your Sass maps must have hues from 10 to 100, with a step increment of 10 like the example below:

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

#### Configure your custom palettes
Configure your app to support the custom palettes and set defaults for each palette by using  the `daff-configure-palettes` function:

| Argument       | Description                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| $color-palette | The name of the palette to read from.                                          |
| $hue           | The hue number to read from the palette. This defaults to 60 if not specified. |

```scss
app-theme.scss

@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-color-palettes' as palette; // path to palettes file

$app-primary: daff-theme.daff-configure-palette(palette.$app-green, 60);
$app-secondary: daff-theme.daff-configure-palette(palette.$app-blue, 60);
$app-tertiary: daff-theme.daff-configure-palette(palette.$app-purple, 60);
```

#### Define your themes
Define your themes by using the `daff-configure-theme` function:

| Argument | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| $primary | Specifies the configured palette to use for your app's primary color.     |
| $secondary | Specifies the configured palette to use for your app's secondary color. |
| $tertiary | Specifies the configured palette to use for your app's tertiary color.   |
| $type | Specifies the type of theme. This can be `light` or `dark`.                  |

`app-theme.scss`

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-color-palettes' as palette; // path to palettes file

$app-primary: daff-theme.daff-configure-palette(palette.$app-green, 60);
$app-secondary: daff-theme.daff-configure-palette(palette.$app-blue, 60);
$app-tertiary: daff-theme.daff-configure-palette(palette.$app-purple, 60);

$theme: daff-theme.daff-configure-theme($app-primary, $app-secondary, $app-tertiary, 'light');

$app-primary-dark: daff-theme.daff-configure-palette(palette.$app-green, 50);
$app-secondary-dark: daff-theme.daff-configure-palette(palette.$app-blue, 50);
$app-tertiary-dark: daff-theme.daff-configure-palette(palette.$app-purple, 50);

$theme-dark: daff-theme.daff-configure-theme($app-primary-dark, $app-secondary-dark, $app-tertiary-dark, 'dark');
```

#### Setting up the styles file with your custom theme
Create classes in the `styles.scss` file to include the `daff-theme` mixin for `$theme` and `$theme-dark` variables. This will allow you to set a click event on a button to switch between modes. [View this setup in Stackblitz](https://stackblitz.com/edit/ng13-daffodil-design-custom-theme).

`styles.scss`

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
