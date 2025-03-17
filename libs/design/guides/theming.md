# Theming
Daffodil's extensible theming architecture allows you to customize our components to match your brand or product's visual style using a set of universal variables, eliminating the need for individual component modifications.

## Theming basics
Daffodil Design is built with [Sass](https://sass-lang.com/). You should be familiar with the basics of CSS and Sass, including variables, functions, and mixins.

A theme must be configured in order for the components to work properly.

## Default theme
The `daff-theme` mixin includes styles for all components. The example below demonstrates how to use Daffodil Design's default theme, where the `$theme` variable is the default configured theme. The mixin is included as part of the `styles.scss` file to ensure that component styles are applied across the entire application.

```scss
@use '@daffodil/design/scss/theme' as daff-theme;

@include daff-theme.daff-theme(daff-theme.$theme);
```

## Modes
Dark and light modes are supported out of the box in all Daffodil Design components, allowing you to easily switch appearances without additional work.

### Usage
To support light and dark mode in your application:

1. Include the `daff-theme` mixin with `$theme` and `$theme-dark` variables to the `.daff-theme-light` and `.daff-theme-dark` classes.

```scss
@use '@daffodil/design/scss/theme' as daff-theme;

.daff-theme-light {
	@include daff-theme.daff-theme(daff-theme.$theme);
}

.daff-theme-dark {
	@include daff-theme.daff-theme(daff-theme.$theme-dark);
}
```

> The `$theme` and `$theme-dark` variables are based on Daffodil Design's default configured theme. Learn how to customize your own theme [here](/libs/design/guides/theming.md#customize-your-own-theme).

2. Add `DAFF_THEME_INITIALIZER` to the `providers` of your root component.

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

3. Use `DaffThemingService` and `DaffTheme` to set up a theme switch component with a button to toggle between modes.

```html
<button type="button" (click)="onButtonClick()" [attr.aria-label]="ariaLabel$ | async">
	<fa-icon [icon]="icon$ | async"></fa-icon>
</button>
```

```ts
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  faMoon,
  faSun,
  IconDefinition,
	FaIconComponent,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffTheme,
  DaffThemingService,
} from '@daffodil/design';

export const THEME_SWITCH_TO_LIGHT_LABEL = 'Enable light mode';
export const THEME_SWITCH_TO_DARK_LABEL = 'Enable dark mode';

@Component({
  selector: 'theme-switch-button',
  templateUrl: './theme-switch-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		FaIconComponent,
	],
})
export class ThemeSwitchButtonComponent implements OnInit {
  theme$: Observable<DaffTheme>;
  ariaLabel$: Observable<string>;
  icon$: Observable<IconDefinition>;

  constructor(private themeService: DaffThemingService) { }

  ngOnInit() {
    this.theme$ = this.themeService.getTheme();
    this.ariaLabel$ = this.theme$.pipe(
      map((theme) => theme === DaffTheme.Light ? THEME_SWITCH_TO_DARK_LABEL : THEME_SWITCH_TO_LIGHT_LABEL),
    );
    this.icon$ = this.theme$.pipe(
      map((theme) => theme === DaffTheme.Light ? faMoon : faSun),
    );
  }

  onButtonClick() {
    this.themeService.switchTheme();
  }
}
```

## Customize your own theme
Daffodil allows you to define your own themes to match your brand or product's visual style. The guides below will walk you through the entire process.

### Create custom palettes
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

### Configure your custom palettes
Configure your app to support the custom palettes and set defaults for each palette by using  the `daff-configure-palettes` function:

| Argument         | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| `$color-palette` | The name of the palette to read from.                                          |
| `$hue`           | The hue number to read from the palette. This defaults to 60 if not specified. |

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-color-palettes' as palette; // path to palettes file

$app-primary: daff-theme.daff-configure-palette(palette.$app-green, 60);
$app-secondary: daff-theme.daff-configure-palette(palette.$app-blue, 60);
$app-tertiary: daff-theme.daff-configure-palette(palette.$app-purple, 60);
```

### Define your themes
Define your themes by using the `daff-configure-theme` function:

| Argument | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| `$primary` | Specifies the configured palette to use for your app's primary color.     |
| `$secondary` | Specifies the configured palette to use for your app's secondary color. |
| `$tertiary` | Specifies the configured palette to use for your app's tertiary color.   |
| `$type` | Specifies the type of theme. This can be `light` or `dark`.                  |

```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-color-palettes' as palette; // path to palettes file

$app-primary: daff-theme.daff-configure-palette(palette.$app-green, 60);
$app-secondary: daff-theme.daff-configure-palette(palette.$app-blue, 60);
$app-tertiary: daff-theme.daff-configure-palette(palette.$app-purple, 60);

$theme-light: daff-theme.daff-configure-theme($app-primary, $app-secondary, $app-tertiary, 'light');

$app-primary-dark: daff-theme.daff-configure-palette(palette.$app-green, 50);
$app-secondary-dark: daff-theme.daff-configure-palette(palette.$app-blue, 50);
$app-tertiary-dark: daff-theme.daff-configure-palette(palette.$app-purple, 50);

$theme-dark: daff-theme.daff-configure-theme($app-primary-dark, $app-secondary-dark, $app-tertiary-dark, 'dark');
```

### Set up the styles file with your custom theme
```scss
@use '@daffodil/design/scss/theme' as daff-theme;
@use 'app-theme';

.daff-theme-light {
  @include daff-theme.daff-theme(app-theme.$theme-light);
}

.daff-theme-dark {
  @include daff-theme.daff-theme(app-theme.$theme-dark);
}
```
