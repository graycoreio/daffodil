import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

export interface DaffContactFacadeInterface {
  success$: Observable<boolean>;
  error$: Observable<string[]>;
  loading$: Observable<boolean>;

  dispatch(action: Action): void;
}