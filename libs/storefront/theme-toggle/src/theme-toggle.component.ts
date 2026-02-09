import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faMoon,
  faSun,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffTheme,
  DaffThemingService,
} from '@daffodil/design';
import { DaffIconButtonComponent } from '@daffodil/design/button';

export const TOGGLE_TO_LIGHT_LABEL = 'Switch to light mode';
export const TOGGLE_TO_DARK_LABEL = 'Switch to dark mode';

@Component({
  selector: 'daff-sf-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-live': 'polite',
  },
  imports: [
    AsyncPipe,
    FaIconComponent,
    DaffIconButtonComponent,
  ],
})
export class DaffSfThemeToggleComponent implements OnInit {
  theme$: Observable<DaffTheme>;
  ariaLabel$: Observable<string>;
  icon$: Observable<IconDefinition>;

  constructor(private themeService: DaffThemingService) { }

  /**
   * @docs-private
   */
  ngOnInit() {
    this.theme$ = this.themeService.getTheme();
    this.ariaLabel$ = this.theme$.pipe(
      map((theme) => theme === DaffTheme.Light ? TOGGLE_TO_DARK_LABEL : TOGGLE_TO_LIGHT_LABEL),
    );
    this.icon$ = this.theme$.pipe(
      map((theme) => theme === DaffTheme.Light ? faMoon : faSun),
    );
  }

  toggleTheme() {
    this.themeService.switchTheme();
  }
}
