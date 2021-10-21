# Theming
Daffodil's theming capabilities enables you to customize `@daffodil/design` components to reflect your brand. A theme consists of custom color configurations that will work in dark and light themes.

## Custom Colors
:stop: Before you begin, read the [accessibility guide on color in `@daffodil/design`](../accessibility#color.md).

[validate palette function]

## Themes
Dark and light modes are supported in all `@daffodil/design` components. When a theme is not specified, Daffodil defaults to the `light` mode.

### Setting up the theme file
Configure your application to support light and dark modes by adding the following to the `theme.scss` file:

```scss
@import '@daffodil/design/daff-theme';

// These palettes describe the colors that make up the "theme" of the components.

$primary: daff-configure-palette($daff-blue, 60);
$secondary: daff-configure-palette($daff-purple, 60);
$tertiary: daff-configure-palette($daff-turquoise, 60);

$theme: daff-configure-theme($primary, $secondary, $tertiary, 'light');

$primary-dark: daff-configure-palette($daff-blue, 50);
$secondary-dark: daff-configure-palette($daff-purple, 50);
$tertiary-dark: daff-configure-palette($daff-green, 50);

$theme-dark: daff-configure-theme($primary, $secondary, $tertiary, 'dark');

$black: daff-map-deep-get($theme, 'core.black');
$white: daff-map-deep-get($theme, 'core.white');

$gray: daff-configure-palette($daff-gray, 60);
```

### Setting up the styles file
Import `theme.scss` into the `styles.scss` file.

```scss
@import '@daffodil/design/daff-global';
@import 'theme';
```

> These lines include theme variables and functions and then generate the theme CSS that will style the components.

Create classes in the `styles.scss` file to include the `daff-theme` mixin for `$theme` and `$theme-dark` variables. This will allow you to set a click event on a button to switch between modes. [View this setup in Stackblitz](https://stackblitz.com/edit/daffodil-design-theming-angular-10)

```scss
.daff-theme-light {
	@include daff-theme($theme);
}

.daff-theme-dark {
	@include daff-theme($theme-dark);
}
```