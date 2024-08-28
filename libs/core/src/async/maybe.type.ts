import { Observable } from 'rxjs';

export type MaybeAsync<T> = Promise<T> | Observable<T> | T;
