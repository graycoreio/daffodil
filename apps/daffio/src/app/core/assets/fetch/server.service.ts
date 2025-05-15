import {
  Injectable,
  makeStateKey,
  TransferState,
} from '@angular/core';
import { readFile } from 'node:fs/promises';
import {
  Observable,
  from,
  map,
  tap,
} from 'rxjs';

import { DaffioAssetFetchServiceInterface } from './service.interface';

@Injectable({ providedIn: 'root' })
export class DaffioAssetFetchServerService implements DaffioAssetFetchServiceInterface {
  constructor(
    private transferState: TransferState,
  ) {}

  fetch<T = unknown>(path: string, key: string): Observable<T> {
    return from(readFile(path)).pipe(
      map((buffer) => JSON.parse(buffer.toString())),
      tap((response) => {
        this.transferState.set(makeStateKey<T>(key), response);
      }),
    );
  }
}
