import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffContactServiceInterface } from '@daffodil/contact/driver';
import { DaffContactUnion } from '@daffodil/contact';
export declare class DaffInMemoryContactService implements DaffContactServiceInterface<DaffContactUnion, DaffContactUnion> {
    private http;
    url: string;
    constructor(http: HttpClient);
    send(payload: DaffContactUnion): Observable<DaffContactUnion>;
}
