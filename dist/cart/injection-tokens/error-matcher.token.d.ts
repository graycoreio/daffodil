import { InjectionToken } from '@angular/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';
/**
 * Transforms `DaffError`s into `DaffStateError`s before they are serialized into state.
 * Can be used to further refine Daffodil errors into more specific app errors.
 */
export declare const DAFF_CART_ERROR_MATCHER: InjectionToken<typeof daffTransformErrorToStateError>;
