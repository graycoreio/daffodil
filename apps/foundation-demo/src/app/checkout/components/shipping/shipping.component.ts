import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';
import { Observable } from 'rxjs';
import { SetShowShippingForm, ToggleShippingForm } from '../../actions/shipping.actions';
import { Store, select } from '@ngrx/store';
import * as fromFoundationShipping from '../../reducers';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ShippingComponent {

  @Input() isShippingInfoValid: Boolean;
  @Input() shippingInfo: ShippingAddress;
  @Input() selectedShippingOption: string;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  showShippingForm$: Observable<boolean>;

  constructor(
    private store: Store<fromFoundationShipping.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(
      new SetShowShippingForm(!this.isShippingInfoValid)
    );

    this.showShippingForm$ = this.store.pipe(
      select(fromFoundationShipping.selectShowShippingForm)
    );
  }

  toggleShippingView() {
    this.store.dispatch(
      new ToggleShippingForm()
    );
  }

  onUpdateShippingInfo(shippingInfo: ShippingAddress) {
    this.updateShippingInfo.emit(shippingInfo);
    this.toggleShippingView();
  }

  onSelectShippingOption(shippingOption: string) {
    this.selectShippingOption.emit(shippingOption);
  }
}
