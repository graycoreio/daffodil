import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'daff-container',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>',
  host: {
    class: 'daff-container',
    '[class.daff-container--small]':'size === "small"',
    '[class.daff-container--medium]':'size === "medium"',
    '[class.daff-container--large]':'size === "large"',
    '[class.daff-container--xlarge]':'size === "xlarge"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffContainerComponent {

  @Input() size: string;

}
