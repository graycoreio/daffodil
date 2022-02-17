import { HttpResponse } from '@angular/common/http';
import { RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffSearchResult } from '@daffodil/search';

/**
 * The child backends to which the search in-memory backend will delegate search queries.
 */
export interface DaffSearchInMemoryChildBackend {
  /**
   * Search for entities and get the results.
   */
  get(reqInfo: RequestInfo): Observable<HttpResponse<DaffSearchResult[]>>;
}
