import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioRouterNamedViewsEnum } from '../../named-views/models/named-views.enum';

@Component({
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateComponent {
}
