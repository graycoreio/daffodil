import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  makeStateKey,
  TransferState,
} from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffioAssetFetchServiceInterface } from './service.interface';

@Injectable({ providedIn: 'root' })
export class DaffioAssetFetchBrowserService implements DaffioAssetFetchServiceInterface {
  constructor(
    private http: HttpClient,
    private transferState: TransferState,
  ) {}

  fetch<T = unknown>(path: string, key: string): Observable<T> {
    const stateKey = makeStateKey<T>(key);
    if (this.transferState.hasKey(stateKey)) {
      return of(this.transferState.get(stateKey, null));
    }
    return this.http.get<T>(path.replaceAll('//', '/'));
  }
}
