import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { DaffDocsApiRole } from '@daffodil/docs-utils';

export type DaffioDocsApiItemLabelType = `${DaffDocsApiRole}` | 'package' | 'deprecated';

@Component({
  selector: 'daffio-docs-api-item-label',
  template: '<ng-content></ng-content>',
  styleUrl: './api-item-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsApiItemLabelComponent {
  @Input() type: DaffioDocsApiItemLabelType;

  @HostBinding('class.daffio-docs-api-item-label') hostClass = true;

  @HostBinding('class') get class() {
    return {
      [this.type]: true,
    };
  }
}
