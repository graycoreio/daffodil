import { Injectable } from '@angular/core';

import { DaffCountry } from '@daffodil/geography';

import { DaffMagentoSubdivisionTransformer } from './subdivision.service';
import { MagentoCountry } from '../../models/responses/country';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCountryTransformer {
  constructor(public subdivisionTransformer: DaffMagentoSubdivisionTransformer) {}

  private transformSubdivisions(regions: MagentoCountry['available_regions']): DaffCountry['subdivisions'] {
    return regions.map(region => this.subdivisionTransformer.transform(region))
  }

  /**
   * Transforms the MagentoCountry from the magento country query into a DaffCountry.
   */
  transform(country: MagentoCountry): DaffCountry {
    return country ? {
      ...{magento_country: country},

      subdivisions: this.transformSubdivisions(country.available_regions || []),

      id: country.id,
      name: country.full_name_locale,
      name_en: country.full_name_english,
      alpha2: country.two_letter_abbreviation,
      alpha3: country.three_letter_abbreviation,
    } : null
  }
}
