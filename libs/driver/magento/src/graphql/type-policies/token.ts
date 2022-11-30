import {
  inject,
  InjectionToken,
} from '@angular/core';
import type { TypePolicies } from '@apollo/client/core';

import { DAFF_MAGENTO_TYPE_POLICY_ENTRIES } from './entries.token';

/**
 * A token containing type policies for the imported Magento driver modules.
 * This should be injected and passed to the constructor for the Apollo in-memory cache.
 * See https://www.apollographql.com/docs/react/caching/cache-configuration/#customizing-cache-ids
 */
export const DAFF_MAGENTO_TYPE_POLICIES = new InjectionToken<TypePolicies>('DAFF_MAGENTO_TYPE_POLICIES', {
  factory: () => inject(DAFF_MAGENTO_TYPE_POLICY_ENTRIES).reduce<TypePolicies>((acc, entry) => {
    acc[entry.typename] = entry.policy;
    return acc;
  }, {}),
});
