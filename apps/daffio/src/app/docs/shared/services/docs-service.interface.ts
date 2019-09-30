import { DaffioDoc } from '../models/doc';
import { Observable } from 'rxjs';

export interface DaffioDocServiceInterface<T extends DaffioDoc> {
  get(path: string): Observable<T>;
}
