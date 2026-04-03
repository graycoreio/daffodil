import {
  inject,
  InjectionToken,
} from '@angular/core';

import { ALGOLIA_SEARCH_RESULT_TRANSFORMS } from './token';
import { AlgoliaSearchResultTransform } from './type';

export const ALGOLIA_SEARCH_RESULT_TRANSFORM_MAP = new InjectionToken('ALGOLIA_SEARCH_RESULT_TRANSFORM', {
  factory: () => inject(ALGOLIA_SEARCH_RESULT_TRANSFORMS).reduce((acc, { kind, transform }) => {
    acc[kind] = transform;
    return acc;
  }, <Record<string, AlgoliaSearchResultTransform>>{}),
});
