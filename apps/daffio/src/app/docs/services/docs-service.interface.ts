import { Observable } from 'rxjs';

import { DaffioDoc } from '../models/doc';
import { DaffioPackagesList } from '../models/packages-list';

export interface DaffioDocsServiceInterface<T extends DaffioDoc = DaffioDoc, V extends DaffioPackagesList = DaffioPackagesList> {
  get(path: string): Observable<T>;
  getGuideList(): Observable<V>;
}
