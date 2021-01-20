import { daffAuthReducer } from './auth/public_api';
import { daffAuthLoginReducer } from './login/public_api';
import { daffAuthRegisterReducer } from './register/public_api';
export declare const daffAuthReducers: {
    auth: typeof daffAuthReducer;
    login: typeof daffAuthLoginReducer;
    register: typeof daffAuthRegisterReducer;
};
