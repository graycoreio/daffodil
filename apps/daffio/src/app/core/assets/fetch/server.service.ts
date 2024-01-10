import { Injectable } from '@angular/core';
import { readFile } from 'node:fs/promises';
import {
  Observable,
  from,
  map,
} from 'rxjs';

import { DaffioAssetFetchServiceInterface } from './service.interface';

@Injectable({ providedIn: 'root' })
export class DaffioAssetFetchServerService implements DaffioAssetFetchServiceInterface {
  fetch<T = unknown>(path: string): Observable<T> {
    return from(readFile(path)).pipe(
      map((buffer) => JSON.parse(buffer.toString())),
    );
  }
}
