import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';
import { Observable } from 'rxjs';
import { SetShowShippingForm, ToggleShowShippingForm } from '../../../actions/shipping.actions';
import { Store, select } from '@ngrx/store';
import * as fromFoundationCheckout from '../../../reducers';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ShippingComponent {

  @Input() isShippingInfoValid: boolean;
  @Input() shippingInfo: ShippingAddress;
  @Input() selectedShippingOption: string;
  @Input() hideContinueToPayment: boolean;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();

  showShippingForm$: Observable<boolean>;

  constructor(
    private store: Store<fromFoundationCheckout.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(
      new SetShowShippingForm(!this.isShippingInfoValid)
    );

    this.showShippingForm$ = this.store.pipe(
      select(fromFoundationCheckout.selectShowShippingForm)
    );
  }

  toggleShippingView() {
    this.store.dispatch(
      new ToggleShowShippingForm()
    );
  }

  onUpdateShippingInfo(shippingInfo: ShippingAddress) {
    this.updateShippingInfo.emit(shippingInfo);
    this.toggleShippingView();
  }

  onSelectShippingOption(shippingOption: string) {
    this.selectShippingOption.emit(shippingOption);
  }

  onContinueToPayment() {
    this.continueToPayment.emit();
  }
}
