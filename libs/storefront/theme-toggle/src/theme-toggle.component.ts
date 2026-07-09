import {
  ChangeDetectionStrategy,
  Component,
  computed,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCircleHalfStroke,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffTheme,
  DaffThemingService,
} from '@daffodil/design';
import { DAFF_ICON_BUTTON_COMPONENTS } from '@daffodil/design/button';
import {
  DAFF_MENU_COMPONENTS,
  DaffMenuService,
} from '@daffodil/design/menu';

/**
 * DaffSfThemeToggleComponent renders a button that opens a menu for choosing
 * between the light, dark, and system themes.
 */
@Component({
  selector: 'daff-sf-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-live': 'polite',
  },
  imports: [
    FaIconComponent,
    DAFF_ICON_BUTTON_COMPONENTS,
    DAFF_MENU_COMPONENTS,
  ],
  providers: [
    DaffMenuService,
  ],
})
export class DaffSfThemeToggleComponent {
  /** @docs-private */
  DaffTheme = DaffTheme;

  /** @docs-private */
  faSun = faSun;
  /** @docs-private */
  faMoon = faMoon;
  /** @docs-private */
  faCircleHalfStroke = faCircleHalfStroke;

  /**
   * @docs-private
   *
   * The user's stored theme preference.
   */
  preference = toSignal(this.themeService.getThemePreference());

  /** @docs-private */
  icon = computed(() => {
    switch (this.preference()) {
      case DaffTheme.Light:
        return faSun;
      case DaffTheme.Dark:
        return faMoon;
      default:
        return faCircleHalfStroke;
    }
  });

  /**
   * @docs-private
   *
   * The accessible label for the toggle.
   */
  label = computed(() => {
    const theme = this.preference() ?? DaffTheme.System;
    return `Change theme. Current theme: ${theme}`;
  });

  constructor(private themeService: DaffThemingService) { }

  /** @docs-private */
  lightMode() {
    this.themeService.lightMode();
  }

  /** @docs-private */
  darkMode() {
    this.themeService.darkMode();
  }

  /** @docs-private */
  systemMode() {
    this.themeService.systemMode();
  }
}
