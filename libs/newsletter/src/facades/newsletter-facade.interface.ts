import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

export interface DaffNewsletterFacadeInterface {
  success$ : Observable<boolean>;
  error$: Observable<string>;
  loading$: Observable<boolean>;

  dispatch(action: Action): void;
}