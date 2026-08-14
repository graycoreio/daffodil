# Modes
Daffodil Design supports light and dark modes out of the box, allowing you to easily switch between them without additional configuration.

## Enable modes with the default theme
Daffodil’s default theme is not automatically configured and must be added to your styles. To enable light and dark mode with it:

1. Add the `daff-component-themes` mixin with the `$theme` and `$theme-dark` variables to the `.daff-theme-light` and `.daff-theme-dark` classes.

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use '@daffodil/design/scss/theme/default' as daff-default-theme;

.daff-theme-light {
	@include daff-theme.daff-component-themes(daff-default-theme.$theme);
}

.daff-theme-dark {
	@include daff-theme.daff-component-themes(daff-default-theme.$theme-dark);
}
```

> The `$theme` and `$theme-dark` variables are based on Daffodil Design's default theme. Learn how to customize your own theme [here](/libs/design/guides/theming/customize-your-own-theme.md).

2. Add `DAFF_THEME_INITIALIZER` to the `providers` array of your root component.

```ts
import { NgModule } from '@angular/core';
import { DAFF_THEME_INITIALIZER } from '@daffodil/design';

@NgModule({
  providers: [
    DAFF_THEME_INITIALIZER,
  ],
})
class AppModule {}
```

## Support both modes in your own components
Your own components can respond to light and dark mode the same way Daffodil Design's components do. Use the `daff-light-mode` and `daff-dark-mode` mixins to set the styles for each mode.

| Mixin | Description |
| -------- | ----------- |
| `daff-light-mode` | Styles that only apply in light mode |
| `daff-dark-mode` | Styles that only apply in dark mode |

1. Create a theme file for your component. Get the mode with the `daff-get-theme-mode` function, then add the styles for each mode.

```scss
// custom-component-theme.scss
@use '@daffodil/design/scss/theme' as daff-theme;

@mixin custom-component-theme($theme) {
	$neutral: daff-theme.daff-get-palette($theme, neutral);
	$mode: daff-theme.daff-get-theme-mode($theme);

	.custom-component {
		@include daff-theme.daff-light-mode($mode) {
			background: daff-theme.daff-color($neutral, 10);
			color: daff-theme.daff-color($neutral, 90);
		}

		@include daff-theme.daff-dark-mode($mode) {
			background: daff-theme.daff-color($neutral, 90);
			color: daff-theme.daff-color($neutral, 10);
		}
	}
}
```

2. Add your component's theme next to `daff-component-themes` in your styles, using `$theme` for light mode and `$theme-dark` for dark mode.

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use '@daffodil/design/scss/theme/default' as daff-default-theme;
@use 'custom-component-theme';

.daff-theme-light {
	@include daff-theme.daff-component-themes(daff-default-theme.$theme);
	@include custom-component-theme.custom-component-theme(daff-default-theme.$theme);
}

.daff-theme-dark {
	@include daff-theme.daff-component-themes(daff-default-theme.$theme-dark);
	@include custom-component-theme.custom-component-theme(daff-default-theme.$theme-dark);
}
```

> Only add the styles that change between light and dark mode to your theme file. Styles that stay the same, like layout and spacing, belong in your component's stylesheet.

## Configure a theme toggle
Use the [theme toggle](/libs/storefront/theme-toggle/README.md) component from `@daffodil/storefront/theme-toggle` to add a button that toggles between light and dark modes.

```ts
import { DaffSfThemeToggleComponent } from '@daffodil/storefront/theme-toggle';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffSfThemeToggleComponent,
  ],
})
export class CustomComponent {}
```

```html
<daff-sf-theme-toggle></daff-sf-theme-toggle>
```