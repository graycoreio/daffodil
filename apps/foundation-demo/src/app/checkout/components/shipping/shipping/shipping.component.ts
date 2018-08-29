import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { DaffodilAddress, ShippingOption } from '@daffodil/core';
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
  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOptionId: string;
  @Input() showPaymentView: boolean;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();

  showShippingForm$: Observable<boolean>;
  shippingOptions: ShippingOption[];

  constructor(
    private store: Store<fromFoundationCheckout.State>
  ) { }

  ngOnInit() {
    this.shippingOptions = [
      {
        id: '0',
        text: 'Standard'
      },
      {
        id: '1',
        text: 'Two Day'
      },
      {
        id: '2',
        text: 'One Day'
      }
    ];

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

  getSelectedShippingOption(id: string) {
    for(let i=0;i<this.shippingOptions.length; i++) {
      if(this.shippingOptions[i].id === id) {
        return this.shippingOptions[i];
      }
    }
  }

  onUpdateShippingInfo(shippingInfo: DaffodilAddress) {
    this.updateShippingInfo.emit(shippingInfo);
    this.toggleShippingView();
  }

  onSelectShippingOption(shippingOptionId: number) {
    this.selectShippingOption.emit(shippingOptionId);
  }

  onContinueToPayment() {
    this.continueToPayment.emit();
  }
}
