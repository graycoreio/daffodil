import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffRouterNamedViewOutletDirective } from '@daffodil/router';

import { DaffioRouterNamedViewsEnum } from '../router/named-views/models/named-views.enum';
import { DaffioSidebarViewportContainer } from '../sidebar/containers/sidebar-viewport/sidebar-viewport.component';

@Component({
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    DaffioSidebarViewportContainer,
    DaffRouterNamedViewOutletDirective,
  ],
})
export class TemplateComponent {
  readonly navNamedView = DaffioRouterNamedViewsEnum.NAV;
  readonly footerNamedView = DaffioRouterNamedViewsEnum.FOOTER;
}
