import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffDocsSassItem } from '@daffodil/docs-utils';

export const DOCS_LOCATION = '/assets/sassdoc/output.json';

@Injectable({
  providedIn: 'root',
})
export class DesignLandColorPaletteService {
  constructor(private httpClient: HttpClient) { }

  get(): Observable<Array<DaffDocsSassItem>> {
    return this.httpClient.get<Array<DaffDocsSassItem>>(DOCS_LOCATION);
  }
}
