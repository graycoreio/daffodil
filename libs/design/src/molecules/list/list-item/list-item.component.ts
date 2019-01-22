import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'daff-list-item',
  templateUrl: './list-item.component.html',
  host: {
    'class': 'daff-list-item'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffListItemComponent {}
