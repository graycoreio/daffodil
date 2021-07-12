import { Observable } from 'rxjs';

import { DaffioApiReference } from '../models/api-reference';

export interface DaffioApiServiceInterface {
  list(): Observable<DaffioApiReference[]>;
}
