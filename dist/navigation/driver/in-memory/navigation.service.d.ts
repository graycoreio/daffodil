import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationServiceInterface } from '@daffodil/navigation/driver';
export declare class DaffInMemoryNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {
    private http;
    url: string;
    constructor(http: HttpClient);
    get(navigationId: string): Observable<DaffNavigationTree>;
}
