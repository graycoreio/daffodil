import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

/**
 * A component for creating articles within your page.
 */
@Component({
  selector: 'daff-article',
  template: '<ng-content></ng-content>',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DaffArticleComponent {

  @HostBinding('class.daff-article') class = true;

  @HostBinding('attr.role') role = 'article';
}
