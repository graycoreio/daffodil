export interface DaffStoreFacade<T> {
    dispatch(action: T): any;
}
