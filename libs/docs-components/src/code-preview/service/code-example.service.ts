import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DAFF_DOCS_LOCATION } from './docs-location.token';
import { DaffDocsComponentExamples } from '../../examples/service';
import { DaffDocsCodeExample } from '../model/code-example';
import { DaffExampleDoc } from '../model/doc';

/**
 * You can use this service to look up a code example and translate it into
 * its associated component.
 *
 * {@link DaffDocsExampleViewerContainer}
 */
@Injectable()
export class DaffDocsCodeExampleService {

  constructor(
    private httpClient: HttpClient,
    private examples: DaffDocsComponentExamples,
    @Inject(DAFF_DOCS_LOCATION) private docsLocation: string,
  ) { }

  /**
   *
   * @param key - name of the example component requested.
   */
  get(key: string): Observable<DaffDocsCodeExample> {
    return this.httpClient.get<DaffExampleDoc>(`${this.docsLocation}/${key}.json`).pipe(
      map((example) => ({
        ...example,
        name: undefined,
        component: this.examples.examples.get(example.name),
      })),
    );
  }
}
