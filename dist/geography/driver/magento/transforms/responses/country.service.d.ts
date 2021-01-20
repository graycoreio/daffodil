import { DaffCountry } from '@daffodil/geography';
import { DaffMagentoSubdivisionTransformer } from './subdivision.service';
import { MagentoCountry } from '../../models/responses/country';
/**
 * Transforms magento carts into an object usable by daffodil.
 */
export declare class DaffMagentoCountryTransformer {
    subdivisionTransformer: DaffMagentoSubdivisionTransformer;
    constructor(subdivisionTransformer: DaffMagentoSubdivisionTransformer);
    private transformSubdivisions;
    /**
     * Transforms the MagentoCountry from the magento country query into a DaffCountry.
     */
    transform(country: MagentoCountry): DaffCountry;
}
