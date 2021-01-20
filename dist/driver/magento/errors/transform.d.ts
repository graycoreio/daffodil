import { DaffErrorCodeMap } from '@daffodil/core';
/**
 * Transforms the passed error according to the lookup in the passed map.
 */
export declare function daffTransformMagentoError<T extends DaffErrorCodeMap>(error: any, map: T): Error;
