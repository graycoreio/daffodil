import { Observable } from 'rxjs';
import { DaffioApiDocReference } from '../models/api-doc-reference';

export interface DaffioApiDocServiceInterface {
  list() : Observable<DaffioApiDocReference[]>;
}