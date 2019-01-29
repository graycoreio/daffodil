import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'daff-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list.component.scss'],
  host: {
    'class': 'daff-list',
    '[class.daff-list--link]': 'type === "link"',
    '[class.daff-list--multi-line]': 'type === "multi-line"'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffListComponent {
  @Input() type: string;
}
