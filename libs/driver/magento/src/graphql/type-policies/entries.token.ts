import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';
import type { TypePolicy } from '@apollo/client/core';

/**
 * A dict referencing a specific Magento GraphQL schema type (by its typename)
 * and the definition of a custom type policy for consumption by the Apollo cache.
 * See https://www.apollographql.com/docs/react/caching/cache-configuration/#customizing-cache-ids
 */
export interface DaffTypePolicyEntry {
  typename: string;
  policy: TypePolicy;
}

/**
 * A multi token for injecting {@link DaffTypePolicyEntry}.
 * {@link DAFF_MAGENTO_TYPE_POLICIES} is the recommended way to inject type policies.
 */
export const DAFF_MAGENTO_TYPE_POLICY_ENTRIES = new InjectionToken<DaffTypePolicyEntry[]>('DAFF_MAGENTO_TYPE_POLICY_ENTRIES', { factory: () => []});

/**
 * Provides type policies to {@link DAFF_MAGENTO_TYPE_POLICY_ENTRIES}.
 */
export const provideDaffMagentoTypePolicyEntries = (...entries: DaffTypePolicyEntry[]) =>
  entries.map<ValueProvider>(entry => ({
    provide: DAFF_MAGENTO_TYPE_POLICY_ENTRIES,
    useValue: entry,
    multi: true,
  }));
