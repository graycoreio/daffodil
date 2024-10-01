import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'daff-tab-panel',
  template: '<ng-content></ng-content>',
  styleUrl: './tab-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffTabPanelComponent {
  @HostBinding('class.daff-tab-panel') class = true;
  @HostBinding('attr.role') role = 'tabpanel';
}
