import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

@Component({
  selector: 'daff-accordion',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
    }
  `],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffAccordionComponent {}
