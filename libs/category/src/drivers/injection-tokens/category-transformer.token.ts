import { InjectionToken } from '@angular/core';

import { DaffCategoryTransformerInterface } from '../interfaces/category-transformer.interface';
import { DaffCategory } from '../../models/category';

/**
 * Injection token that serves as a placeholder for any service that implements the DaffCategoryTransformerInterface.
 */
export const DaffCategoryTransformer = 
    new InjectionToken<DaffCategoryTransformerInterface<DaffCategory>>('DaffCategoryTransformer');
