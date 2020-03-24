import { Injectable } from '@angular/core';

import { DaffSubdivision } from '../../../../models/subdivision';
import { MagentoRegion } from '../../models/responses/region';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoSubdivisionTransformer {
  /**
   * Transforms the MagentoRegion from the magento region query into a DaffSubdivision.
   */
  transform(region: MagentoRegion): DaffSubdivision {
    return region ? {
      ...{magento_region: region},

      id: String(region.id),
      name: region.name,
      iso_3166_2: region.code
    } : null
  }
}
