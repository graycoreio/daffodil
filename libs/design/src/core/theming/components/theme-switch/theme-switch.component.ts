import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  faMoon,
  faSun,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffThemingService } from '../../services/theming.service';
import { DaffTheme } from '../../types/theme';

export const DAFF_THEME_SWITCH_TO_LIGHT_LABEL = 'Enable light mode';
export const DAFF_THEME_SWITCH_TO_DARK_LABEL = 'Enable dark mode';

@Component({
  selector: 'daff-theme-switch',
  templateUrl: './theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffThemeSwitchComponent implements OnInit {
  theme$: Observable<DaffTheme>;
  ariaLabel$: Observable<string>;
  icon$: Observable<IconDefinition>;

  constructor(private themeService: DaffThemingService) { }

  ngOnInit() {
    this.theme$ = this.themeService.getTheme();
    this.ariaLabel$ = this.theme$.pipe(
      map((theme) => theme === DaffTheme.Light ? DAFF_THEME_SWITCH_TO_DARK_LABEL : DAFF_THEME_SWITCH_TO_LIGHT_LABEL),
    );
    this.icon$ = this.theme$.pipe(
      map((theme) => theme === DaffTheme.Light ? faMoon : faSun),
    );
  }

  onButtonClick() {
    this.themeService.switchTheme();
  }
}
