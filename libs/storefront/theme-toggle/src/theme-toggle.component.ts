import {
  ChangeDetectionStrategy,
  Component,
  computed,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffTheme,
  DaffThemingService,
} from '@daffodil/design';
import { DaffIconButtonComponent } from '@daffodil/design/button';

/** @docs-private */
export const TOGGLE_TO_LIGHT_LABEL = 'Switch to light mode';
/** @docs-private */
export const TOGGLE_TO_DARK_LABEL = 'Switch to dark mode';

/**
 * DaffSfThemeToggleComponent renders a button that toggles the active
 * theme between light and dark.
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
    DaffIconButtonComponent,
  ],
})
export class DaffSfThemeToggleComponent {
  /** @docs-private */
  theme = toSignal(this.themeService.getTheme());

  /** @docs-private */
  ariaLabel = computed(() => this.theme() === DaffTheme.Light ? TOGGLE_TO_DARK_LABEL : TOGGLE_TO_LIGHT_LABEL);

  /** @docs-private */
  icon = computed(() => this.theme() === DaffTheme.Light ? faMoon : faSun);

  constructor(private themeService: DaffThemingService) { }

  /** @docs-private */
  toggleTheme() {
    this.themeService.switchTheme();
  }
}
