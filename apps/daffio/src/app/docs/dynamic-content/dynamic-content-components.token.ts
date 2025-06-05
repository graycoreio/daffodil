import { Type } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import {
  DaffBaseDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocsDynamicContent } from './dynamic-content.type';

/**
 * A special key to hold the getter to ensure that injected component types don't get confused with getters.
 */
export const DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENT_INJECTION_GETTER_KEY = 'σgetType';

/**
 * An injection of the dynamic content component.
 * One option is just a component class that has `kind` as a static field.
 * The other option is a "getter", an object that has the `kind` and
 * a function that is passed the doc and returns a function that will be run in an injection context.
 * This inner function should return the component type.
 */
export type DaffioDocsDynamicContentComponentInjection<T extends DaffBaseDoc = DaffBaseDoc> = ({readonly kind: DaffDocKind} & Type<DaffioDocsDynamicContent<T>>) | {
  readonly kind: DaffDocKind;
  // While this type might seem overly complicated, the inner function is required as arguments cannot be passed
  // to functions run with `runInInjectionContext`
  [DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENT_INJECTION_GETTER_KEY]: (doc: T) => () => Type<DaffioDocsDynamicContent<T>>;
};

export const {
  token: DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENTS,
  provider: provideDaffioDocsDynamicContentComponents,
} = createMultiInjectionToken<DaffioDocsDynamicContentComponentInjection>('DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENTS');
