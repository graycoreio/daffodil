import { Observable } from 'rxjs';

import { DaffioDoc } from '../models/doc';

export interface DaffioDocsServiceInterface<T extends DaffioDoc = DaffioDoc> {
  get(path: string): Observable<T>;
}
