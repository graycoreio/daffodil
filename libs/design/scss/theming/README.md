# Theming
Daffodil's theming capabilities enables you to customize `@daffodil/design` components to reflect your brand. A theme consists of custom color configurations that will work in dark and light themes.

## Custom Colors
:stop: Before you begin, read the [accessibility guide on color in `@daffodil/design`](../../guides/color#accessibility.md).

[validate palette function]

## Themes
Dark and light modes are supported in all `@daffodil/design` components. When a theme is not specified, Daffodil defaults to the `light` mode.

### Setting up the theme file
Configure your application to support light and dark modes by adding the following to the `theme.scss` file:

```scss
@use '@daffodil/design/scss/theme' as daff-theme;

// These palettes describe the colors that make up the "theme" of the components.

$primary: daff-theme.daff-configure-palette(daff-theme.$daff-blue, 60);
$secondary: daff-theme.daff-configure-palette(daff-theme.$daff-purple, 60);
$tertiary: daff-theme.daff-configure-palette(daff-theme.$daff-turquoise, 60);

$theme: daff-theme.daff-configure-theme($primary, $secondary, $tertiary, 'light');

$primary-dark: daff-theme.daff-configure-palette(daff-theme.$daff-blue, 50);
$secondary-dark: daff-theme.daff-configure-palette(daff-theme.$daff-purple, 50);
$tertiary-dark: daff-theme.daff-configure-palette(daff-theme.$daff-green, 50);

$theme-dark: daff-theme.daff-configure-theme($primary-dark, $secondary-dark, $tertiary-dark, 'dark');

$black: daff-theme.daff-map-deep-get($theme, 'core.black');
$white: daff-theme.daff-map-deep-get($theme, 'core.white');
$gray: daff-theme.daff-map-deep-get($theme, 'core.gray');
```

### Setting up the styles file
Add `theme.scss` to the `styles.scss` file.

```scss
@use 'theme' as app-theme;
```

> These lines include theme variables and functions that will generate the theme CSS and style the components.

Create classes in the `styles.scss` file to include the `daff-theme` mixin for `$theme` and `$theme-dark` variables. This will allow you to set a click event on a button to switch between modes. [View this setup in Stackblitz](https://stackblitz.com/edit/daffodil-design-theming-angular-10)

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'theme' as app-theme;

.daff-theme-light {
	@include daff-theme.daff-theme(app-theme.$theme);
}

.daff-theme-dark {
	@include daff-theme.daff-theme(app-theme.$theme-dark);
}
```