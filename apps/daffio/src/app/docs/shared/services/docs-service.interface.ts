import { DaffioDoc } from '../models/doc';
import { Observable } from 'rxjs';
import { DaffioDocList } from '../models/doc-list';
import { DaffioGuideList } from '../models/guide-list';

export interface DaffioDocServiceInterface<T extends DaffioDoc, V extends DaffioGuideList> {
  get(path: string): Observable<T>;
  getGuideList(): Observable<V>
}
