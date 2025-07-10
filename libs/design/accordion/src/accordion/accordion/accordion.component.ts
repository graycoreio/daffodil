import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

/**
 * Groups accordion items.
 *
 * @example
 * ```html
 * <daff-accordion>
 *  <daff-accordion-item>
 *    <div daffAccordionItemTitle>Title</div>
 *    <div>Expandable content</div>
 *  </daff-accordion-item>
 *  <daff-accordion-item>
 *    <div daffAccordionItemTitle>Title</div>
 *    <div>Expandable content</div>
 *  </daff-accordion-item>
 * </daff-accordion>
 * ```
 */
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
