import { InjectionToken } from '@angular/core';
import { DocumentNode } from 'graphql';
/**
 * An multi-provider injection token for providing extra GraphQL fragments that will be spread into order queries.
 * This can be used to retrieve additional data that is not covered by the standard Daffodil interfaces.
 * The data will appear in DaffOrder#extra_attributes.
 *
 * Fragment structure is platform-specific and this feature should be used with care.
 */
export declare const DaffMagentoExtraOrderFragments: InjectionToken<DocumentNode[]>;
