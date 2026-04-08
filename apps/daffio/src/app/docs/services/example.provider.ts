import {
  EnvironmentProviders,
  Inject,
  Injectable,
  makeEnvironmentProviders,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  DAFF_DOCS_EXAMPLE_SERVICE,
  DaffDocsExampleServiceInterface,
} from '@daffodil/docs';
import { DaffDocsDesignExample } from '@daffodil/docs-utils';

import { DaffioDocsService } from './docs.service';
import { DAFFIO_DOCS_DESIGN_SECTION } from '../design/services/index.service';

@Injectable()
export class DaffioDocsExampleService implements DaffDocsExampleServiceInterface {
  constructor(
    private docsService: DaffioDocsService,
    @Inject(DAFFIO_DOCS_DESIGN_SECTION) private section: string,
  ) {}

  get(example: string): Observable<DaffDocsDesignExample> {
    return this.docsService.get<any>(`docs/${this.section}/examples/${example}`);
  }
}

export const provideDaffioDocsExampleService = (): EnvironmentProviders => makeEnvironmentProviders([
  DaffioDocsExampleService,
  { provide: DAFF_DOCS_EXAMPLE_SERVICE, useExisting: DaffioDocsExampleService },
]);
