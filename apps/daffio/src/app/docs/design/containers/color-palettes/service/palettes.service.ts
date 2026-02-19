import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  crossOsFilename,
  DaffDocsSassItem,
} from '@daffodil/docs-utils';

import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../../../../core/assets/fetch/service.interface';
import { DAFFIO_DOCS_PATH_TOKEN } from '../../../../services/docs-path.token';

/**
 * The relative path to the sassdoc output file containing color palette definitions.
 */
export const DOCS_LOCATION = 'sassdoc/output';

/**
 * A service that fetches color palette documentation from the sassdoc output.
 * Used to display available design system color palettes in the documentation site.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffioColorPaletteService {
  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  /**
   * Fetches the color palette documentation items.
   *
   * @returns Sass documentation items describing available color palettes.
   */
  get(): Observable<Array<DaffDocsSassItem>> {
    return this.fetchAsset.fetch<Array<DaffDocsSassItem>>(`${this.docsPath}/${crossOsFilename(DOCS_LOCATION)}.json`, 'DOCS_LOCATION');
  }
}
