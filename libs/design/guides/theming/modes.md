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