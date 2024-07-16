import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { createSingleInjectionToken } from '@daffodil/core';
import { DaffDocsComponentExamples } from '@daffodil/documentation';

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

export const {
  token: DAFF_DOCS_LOCATION,
  provider: provideDaffDocsLocation,
} = createSingleInjectionToken<string>('DAFF_DOCS_LOCATION', { factory: () => '' });

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
    return this.httpClient.get<DgeniDesignExampleDoc>(`${this.docsLocation}design-examples/${key}.json`).pipe(
      map((example) => ({
        ...example,
        name: undefined,
        component: this.examples.examples.get(example.name),
      })),
    );
  }
}
