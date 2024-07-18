import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { createSingleInjectionToken } from '@daffodil/core';
import {
  DaffDocsComponentExamples,
  DAFF_DOCS_ASSET_PATH_TOKEN,
} from '@daffodil/documentation';

import { DaffDocsCodeExample } from '../model/code-example';

/**
 * Interface representing object returned from assets folder.
 */
export interface DgeniDesignExampleDoc {
  id: string;
  docType: string;
  name: string;
  files: any[];
}

@Injectable()
export class DaffDocsCodeExampleService {
  constructor(
    private httpClient: HttpClient,
    private examples: DaffDocsComponentExamples,
    @Inject(DAFF_DOCS_ASSET_PATH_TOKEN) private docsLocation: string,
  ) { }

  /**
   *
   * @param key - name of the example component requested.
   */
  get(key: string): Observable<DaffDocsCodeExample> {
    return this.httpClient.get<DgeniDesignExampleDoc>(`${this.docsLocation}docs/design-examples/${key}.json`).pipe(
      map((example) => ({
        ...example,
        name: undefined,
        component: this.examples.examples.get(example.name),
      })),
    );
  }
}
