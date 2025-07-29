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

## Configure a theme switch button
Use `DaffThemingService` and `DaffTheme` to create a button that toggles between light and dark modes.

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