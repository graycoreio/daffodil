import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'linkable-card',
  templateUrl: './linkable-card.component.html',
  styleUrls: ['./linkable-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkableCardComponent {}
