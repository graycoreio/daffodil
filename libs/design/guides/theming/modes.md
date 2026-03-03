# Modes
Daffodil Design supports light and dark modes out of the box, allowing you to easily switch between them without additional configuration.

## Enable modes with the default theme
To enable light and dark mode using Daffodil’s default theme:

1. Add the `daff-component-themes` mixin with `$theme` and `$theme-dark` variables to the `.daff-theme-light` and `.daff-theme-dark` classes.

```scss
@use '@daffodil/design/scss/theme' as daff-theme;

.daff-theme-light {
	@include daff-theme.daff-component-themes(daff-theme.$theme);
}

.daff-theme-dark {
	@include daff-theme.daff-component-themes(daff-theme.$theme-dark);
}
```

> The `$theme` and `$theme-dark` variables are based on Daffodil Design's default theme. Learn how to customize your own theme [here](/libs/design/guides/theming/custom-theme.md).

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