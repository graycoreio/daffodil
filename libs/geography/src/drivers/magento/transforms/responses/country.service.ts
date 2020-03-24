import { Injectable } from '@angular/core';

import { DaffMagentoSubdivisionTransformer } from './subdivision.service';
import { MagentoCountry } from '../../models/responses/country';
import { DaffCountry } from '../../../../models/country';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCountryTransformer {
  constructor(public subdivisionTransformer: DaffMagentoSubdivisionTransformer) {}

  private transformSubdivisions(country: MagentoCountry) {
    return {
      subdivisions: country.available_regions
        ? country.available_regions.map(region => this.subdivisionTransformer.transform(region))
        : []
    }
  }

  /**
   * Transforms the MagentoCountry from the magento country query into a DaffCountry.
   */
  transform(country: MagentoCountry): DaffCountry {
    return country ? {
      ...{magento_country: country},

      ...this.transformSubdivisions(country),

      id: country.id,
      name: country.full_name_locale,
      name_en: country.full_name_english,
      alpha2: country.two_letter_abbreviation,
      alpha3: country.three_letter_abbreviation,
    } : null
  }
}
