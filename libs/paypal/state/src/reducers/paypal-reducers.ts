import { daffPaypalExpressReducer } from './express/public_api';
import { daffPaypalReducer } from './paypal/paypal.reducer';

export const daffPaypalReducers = {
  paypal: daffPaypalReducer,
  express: daffPaypalExpressReducer,
};
