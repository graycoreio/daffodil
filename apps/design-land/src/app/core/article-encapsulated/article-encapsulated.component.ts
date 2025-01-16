import { Component } from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

@Component({
  selector: 'design-land-article-encapsulated',
  template: '<ng-content></ng-content>',
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  standalone: false,
})
export class DesignLandArticleEncapsulatedComponent {
}
