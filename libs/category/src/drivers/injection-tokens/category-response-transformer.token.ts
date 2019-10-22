import { InjectionToken } from '@angular/core';

import { DaffCategoryResponseTransformerInterface } from '../interfaces/category-response-transformer.interface';
import { DaffGetCategoryResponse } from '../../models/get-category-response';

/**
 * Injection token that serves as a placeholder for any service that implements the DaffCategoryResponseTransformerInterface.
 */
export const DaffCategoryResponseTransformer = 
    new InjectionToken<DaffCategoryResponseTransformerInterface<DaffGetCategoryResponse>>('DaffCategoryResponseTransformer');
