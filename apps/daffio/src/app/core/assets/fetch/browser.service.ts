import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioAssetFetchServiceInterface } from './service.interface';

@Injectable({ providedIn: 'root' })
export class DaffioAssetFetchBrowserService implements DaffioAssetFetchServiceInterface {
  constructor(
    private http: HttpClient,
  ) {}

  fetch<T = unknown>(path: string): Observable<T> {
    return this.http.get<T>(path.replaceAll('//', '/'));
  }
}
