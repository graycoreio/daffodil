import { InjectionToken } from '@angular/core';
import { Operation } from '@apollo/client/core';

/**
 * The type of function to be provided via the DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER.
 */
export type DaffApolloCachedOperationConverter = (o: Operation) => Operation;

/**
 * An injection token for a converter function that makes apollo operations cacheable. The kind of conversion necessary is 
 * determined by the platform used. These converter functions are defined by daffodil in the respective `@daffodil/driver/{platform}`
 * packages, but need to be provided by the app.
 */
export const DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER = new InjectionToken<DaffApolloCachedOperationConverter>('DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER');
