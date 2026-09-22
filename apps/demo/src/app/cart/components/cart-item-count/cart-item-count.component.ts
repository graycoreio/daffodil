import {
  NgPlural,
  NgPluralCase,
} from '@angular/common';
import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'demo-cart-item-count',
  templateUrl: './cart-item-count.component.html',
  styleUrls: ['./cart-item-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgPlural,
    NgPluralCase,
  ],
})
export class CartItemCountComponent {

  @Input() itemCount: number;
}
