import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffDocsAssetFetchServiceInterface } from './service.interface';

@Injectable({ providedIn: 'root' })
export class DaffDocsAssetFetchBrowserService implements DaffDocsAssetFetchServiceInterface {
  constructor(
    private http: HttpClient,
  ) {}

  fetch<T = unknown>(path: string): Observable<T> {
    return this.http.get<T>(path);
  }
}
