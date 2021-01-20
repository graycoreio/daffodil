import { Observable } from 'rxjs';
import { DaffContactUnion } from '@daffodil/contact';
import { DaffContactServiceInterface } from '@daffodil/contact/driver';
export declare class DaffTestingContactService implements DaffContactServiceInterface<DaffContactUnion, any> {
    send(payload: DaffContactUnion): Observable<any>;
}
