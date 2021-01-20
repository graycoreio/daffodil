import { DaffPaymentActions } from '../../actions/payment.actions';
import { DaffPaymentReducerState } from './payment-reducer.interface';
export declare const initialState: DaffPaymentReducerState;
export declare function daffPaymentReducer(state: DaffPaymentReducerState, action: DaffPaymentActions): DaffPaymentReducerState;
