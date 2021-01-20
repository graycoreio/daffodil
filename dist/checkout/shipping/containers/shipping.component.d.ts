import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DaffAddress } from '@daffodil/core';
import { DaffShippingReducersState } from '../reducers/shipping-reducers.interface';
export declare class ShippingContainer implements OnInit {
    private store;
    shippingAddress$: Observable<DaffAddress>;
    selectedShippingOptionId$: Observable<string>;
    isShippingAddressValid$: Observable<boolean>;
    isShippingOptionSelected$: Observable<boolean>;
    constructor(store: Store<DaffShippingReducersState>);
    ngOnInit(): void;
    updateShippingAddress(address: DaffAddress): void;
    selectShippingOption(optionId: string): void;
}
