import { DaffContactActions } from '../actions/contact.actions';
export interface DaffContactState {
    success: boolean;
    loading: boolean;
    errors: string[] | null;
}
export declare function reducer<T>(state: DaffContactState, action: DaffContactActions<T>): DaffContactState;
