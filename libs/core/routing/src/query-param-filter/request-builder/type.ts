import { ParamMap } from '@angular/router';

import { DaffFilterRequest } from '@daffodil/core';

/**
 * Accepts a list of values set to a particular URL query param and returns a filter request.
 */
export type DaffRoutingQueryParamFilterRequestBuilder<T extends DaffFilterRequest = DaffFilterRequest> = (qpValue: ReturnType<ParamMap['getAll']>, filterName: string) => T;
