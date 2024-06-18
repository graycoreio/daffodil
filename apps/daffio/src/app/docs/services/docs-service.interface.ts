import { Observable } from 'rxjs';

import { DaffDocsNavList } from '@daffodil/docs-utils';

import { DaffioDoc } from '../models/doc';

export interface DaffioDocsServiceInterface<T extends DaffioDoc = DaffioDoc> {
  get(path: string): Observable<T>;
  getPackageList(): Observable<DaffDocsNavList>;
  getGuidesList(): Observable<DaffDocsNavList>;
}
