import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component ({
  // tslint:disable-next-line: component-selector
  selector: 'a[daff-link-set-item]',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffLinkSetItemComponent {

  @HostBinding('class.daff-link-set__item') class = true;
}