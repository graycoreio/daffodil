import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DaffOrderReducersState } from '../reducers/order-reducers.interface';
import { DaffOrder } from '../../models/order/order';
/**
 * @deprecated
 */
export declare class OrderContainer implements OnInit {
    private store;
    order$: Observable<DaffOrder>;
    loading$: Observable<boolean>;
    constructor(store: Store<DaffOrderReducersState>);
    ngOnInit(): void;
}
