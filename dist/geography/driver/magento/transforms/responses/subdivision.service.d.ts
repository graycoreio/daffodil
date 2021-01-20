import { DaffSubdivision } from '@daffodil/geography';
import { MagentoRegion } from '../../models/responses/region';
/**
 * Transforms magento carts into an object usable by daffodil.
 */
export declare class DaffMagentoSubdivisionTransformer {
    /**
     * Transforms the MagentoRegion from the magento region query into a DaffSubdivision.
     */
    transform(region: MagentoRegion): DaffSubdivision;
}
