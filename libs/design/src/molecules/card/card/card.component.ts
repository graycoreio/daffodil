import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'daff-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffCardComponent {

  @HostBinding('class.daff-card') class = true;
}
