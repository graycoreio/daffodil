import {
  EnvironmentProviders,
  Inject,
  Injectable,
  makeEnvironmentProviders,
} from '@angular/core';
import { Observable } from 'rxjs';

import { createSingleInjectionToken } from '@daffodil/core';
import {
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffDocsDesignGuideNavList,
} from '@daffodil/docs-utils';

import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../../core/assets/fetch/service.interface';
import { DAFFIO_DOCS_PATH_TOKEN } from '../../services/docs-path.token';

export const {
  token: DAFFIO_DOCS_DESIGN_SECTION,
  provider: provideDaffioDocsDesignSection,
} = createSingleInjectionToken<string>('DAFFIO_DOCS_DESIGN_SECTION', { factory: () => DAFF_DOCS_DESIGN_PATH });

@Injectable()
export class DaffioDocsDesignIndexService<T extends DaffDocsDesignGuideNavList = DaffDocsDesignGuideNavList> {
  private readonly _key = `${this.section}/index`;

  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
    @Inject(DAFFIO_DOCS_DESIGN_SECTION) private section: string,
  ) {}

  getList(): Observable<T> {
    return this.fetchAsset.fetch<T>(`${this.docsPath}/${DAFF_DOCS_PATH}/${this.section}/index.json`, this._key);
  }
}

export const provideDaffioDocsDesignIndexService = (section: string): EnvironmentProviders => makeEnvironmentProviders([
  DaffioDocsDesignIndexService,
  provideDaffioDocsDesignSection(section),
]);
