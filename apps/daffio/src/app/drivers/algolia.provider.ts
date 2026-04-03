import { provideAlgoliaSearchDocs } from '@daffodil/search-docs/driver/algolia';

import { environment } from '../../environments/environment';

export const provideDaffioAlgolia = () => provideAlgoliaSearchDocs(environment.algolia, () => 'docs');
