import { Component, HostBinding, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * DaffLinkSetComponent is a component for displaying a two or more links.
 */
@Component({
  selector: 'daff-link-set',
  template: '<ng-content></ng-content>',
  styleUrls: ['./link-set.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffLinkSetComponent {

  @HostBinding('class.daff-link-set') class = true;
}
