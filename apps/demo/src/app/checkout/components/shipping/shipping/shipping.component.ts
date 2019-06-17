import { Component, Input, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import { SetShowShippingForm, ToggleShowShippingForm } from '../../../actions/shipping.actions';
import * as fromDemoCheckout from '../../../reducers';

@Component({
  selector: 'demo-shipping',
  templateUrl: './shipping.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ShippingComponent implements OnInit {

  @Input() isShippingAddressValid: boolean;
  @Input() shippingAddress: DaffAddress;
  @Input() selectedShippingOptionId: string;
  @Input() showPaymentView: boolean;
  @Output() updateShippingAddress: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();

  showShippingForm$: Observable<boolean>;

  constructor(
    private store: Store<fromDemoCheckout.State>
  ) { }

  ngOnInit() {    
    this.store.dispatch(
      new SetShowShippingForm(!this.isShippingAddressValid)
    );

    this.showShippingForm$ = this.store.pipe(select(fromDemoCheckout.selectShowShippingForm));
  }

  toggleShippingView() {
    this.store.dispatch(
      new ToggleShowShippingForm()
    );
  }

  onUpdateShippingInfo(shippingInfo) {
    this.updateShippingAddress.emit(shippingInfo.address);
    this.selectShippingOption.emit(shippingInfo.shippingOption.id);

    this.toggleShippingView();
  }
}
