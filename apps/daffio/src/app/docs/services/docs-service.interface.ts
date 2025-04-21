import { Observable } from 'rxjs';

import { DaffDoc } from '@daffodil/docs-utils';

export interface DaffioDocsServiceInterface {
  get<T extends DaffDoc = DaffDoc>(path: string): Observable<T>;
}
