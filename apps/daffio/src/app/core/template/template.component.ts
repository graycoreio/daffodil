import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioRouterNamedViewsEnum } from '../router/named-views/models/named-views.enum';

@Component({
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class TemplateComponent {
  readonly navNamedView = DaffioRouterNamedViewsEnum.NAV;
  readonly footerNamedView = DaffioRouterNamedViewsEnum.FOOTER;
}
