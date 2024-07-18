import { Observable } from 'rxjs';

import {
  DaffDoc,
  DaffDocsList,
} from '@daffodil/docs-utils';

export interface DaffDocsAssetServiceInterface<T extends DaffDoc = DaffDoc, V extends DaffDocsList = DaffDocsList> {
  get(path: string): Observable<T>;
  getPackageList(): Observable<V>;
}
