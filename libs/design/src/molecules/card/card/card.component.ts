import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'daff-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    'class': 'daff-card'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffCardComponent {}
