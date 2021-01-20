import { AcceptType } from '../models/acceptJs/accept';
export declare var Accept: AcceptType;
export declare class DaffAcceptJsLoadingService {
    private production;
    private doc;
    constructor(production: boolean, doc: any);
    load(): void;
    getAccept(): AcceptType;
}
