# Introduction
Daffodil's extensible theming architecture allows you to customize our components to match your brand or product's visual style using a set of universal variables, eliminating the need for individual component modifications.

## Theming basics
Daffodil Design is built with [Sass](https://sass-lang.com/), so you should be familiar with CSS and Sass fundamentals such as variables, functions, and mixins.

A theme must be configured in order for Daffodil components to render correctly.

## Set up a theme
Configure a theme using the `daff-component-themes` mixin. This mixin includes styles for all components.

The example below demonstrates how to use Daffodil Design’s default theme.

Add it to your `styles.scss` file to apply styles globally:

```scss
@use '@daffodil/design/scss/theme' as daff-theme;

@include daff-theme.daff-component-themes(daff-theme.$theme);
```

## Next steps
To learn more about theming, see:

- [Light and dark modes](/libs/design/guides/theming/modes.md)
- [Customize your own theme](/libs/design/guides/theming/customize-your-own-theme.md)