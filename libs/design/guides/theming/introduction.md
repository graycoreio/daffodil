# Introduction
Daffodil's extensible theming architecture allows you to customize our components to match your brand or product's visual style using a set of universal variables, eliminating the need for individual component modifications.

## Theming basics
Daffodil Design is built with [Sass](https://sass-lang.com/), so you should be familiar with CSS and Sass fundamentals such as variables, functions, and mixins.

A theme must be configured in order for Daffodil components to render correctly. Daffodil Design provides a default theme, but it is not included automatically and must be added to your styles.

## Set up a theme
Configure a theme using the `daff-component-themes` mixin. This mixin includes styles for all components.

The example below demonstrates how to add Daffodil Design’s default theme.

Add it to your `styles.scss` file to apply styles globally:

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use '@daffodil/design/scss/theme/default' as daff-default-theme;

@include daff-theme.daff-component-themes(daff-default-theme.$theme);
```

> This applies the light theme only. To support both light and dark modes, see the [modes](/libs/design/guides/theming/modes.md) documentation.

## Next steps
To learn more about theming, see:

- [Modes](/libs/design/guides/theming/modes.md)
- [Customize your own theme](/libs/design/guides/theming/customize-your-own-theme.md)