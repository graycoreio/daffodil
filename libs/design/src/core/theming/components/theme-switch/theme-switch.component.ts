import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  faMoon,
  faSun,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffodilThemingService } from '../../services/theming.service';
import {
  DaffodilTheme,
  DaffodilThemeEnum,
} from '../../types/theme';

@Component({
  selector: 'daff-theme-switch',
  templateUrl: './theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffodilThemeSwitchComponent {
  theme$: Observable<DaffodilTheme>;

  constructor(private themeService: DaffodilThemingService) { }

  onButtonClick() {
    this.themeService.switchTheme();
  }

  get ariaLabel$(): Observable<string> {
    return this.themeService.getTheme().pipe(
      map((theme) =>  theme === DaffodilThemeEnum.Light ? 'Enable dark mode' : 'Enable light mode'),
    );
  }

  get icon$(): Observable<IconDefinition> {
    return this.themeService.getTheme().pipe(
      map((theme) =>  theme === DaffodilThemeEnum.Light ? faMoon : faSun),
    );
  }
}
