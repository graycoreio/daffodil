import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffDocsExampleServiceInterface } from '@daffodil/docs/example-viewer';
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
