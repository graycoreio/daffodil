import { Observable } from 'rxjs';

import { DaffioDoc } from '../models/doc';
import { DaffioDocList } from '../models/doc-list';

export interface DaffioDocsServiceInterface<T extends DaffioDoc = DaffioDoc, V extends DaffioDocList = DaffioDocList> {
  get(path: string): Observable<T>;
  getPackageList(): Observable<V>;
}
