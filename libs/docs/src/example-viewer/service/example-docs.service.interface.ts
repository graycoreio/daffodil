import { Observable } from 'rxjs';

import { DaffDocsDesignExample } from '@daffodil/docs-utils';

export interface DaffDocsExampleServiceInterface {
  get(example: string): Observable<DaffDocsDesignExample>;
}
