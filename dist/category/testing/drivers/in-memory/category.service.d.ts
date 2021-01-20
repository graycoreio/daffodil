import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCategoryServiceInterface, DaffGetCategoryResponse, DaffCategoryRequest } from '@daffodil/category';
export declare class DaffInMemoryCategoryService implements DaffCategoryServiceInterface {
    private http;
    url: string;
    constructor(http: HttpClient);
    get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse>;
}
