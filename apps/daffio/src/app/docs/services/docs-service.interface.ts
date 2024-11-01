import { Observable } from 'rxjs';

import { DaffDoc } from '@daffodil/docs-utils';

export interface DaffioDocsServiceInterface<T extends DaffDoc = DaffDoc> {
  get(path: string): Observable<T>;
}
