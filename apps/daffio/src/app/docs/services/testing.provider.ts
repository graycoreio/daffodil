import {
  inject,
  Injectable,
  makeEnvironmentProviders,
} from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffDocFactory } from '@daffodil/docs/testing';
import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioDocsServiceInterface } from './docs-service.interface';
import { DaffioDocsService } from './docs.service';

@Injectable({
  providedIn: 'root',
})
export class DaffioDocsTestingService implements DaffioDocsServiceInterface {
  private factory = inject(DaffDocFactory);

  get<T extends DaffDoc = DaffDoc>(path: string): Observable<T> {
    return of(<T>this.factory.create({
      path,
    }));
  }
}

export const provideDaffioDocsTestingService = () => makeEnvironmentProviders([
  {
    provide: DaffioDocsService,
    useExisting: DaffioDocsTestingService,
  },
]);
