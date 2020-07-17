import { Component, ViewEncapsulation, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'daff-modal-header',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffModalHeaderComponent {
  @HostBinding('class.daff-modal-header') class = true;
}
