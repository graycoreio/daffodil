import {
  inject,
  InjectionToken,
} from '@angular/core';

import { DaffInMemoryBackendCategoryService } from '@daffodil/category/driver/in-memory';
import { DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION } from '@daffodil/external-router/driver';
import { DaffExternalRouterDriverInMemoryConfig } from '@daffodil/external-router/driver/in-memory';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';

export const DEMO_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG
  = new InjectionToken<DaffExternalRouterDriverInMemoryConfig>('DEMO_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG', {
    factory: () => {
      const productBackend = inject(DaffInMemoryBackendProductService);
      // const categoryBackend = inject(DaffInMemoryBackendCategoryService);

      return {
        resolver: url => {
          const product = productBackend.products.find(p => p.url === url);
          if (product) {
            return {
              id: product.id,
              url,
              // TODO(griest024): don't hardcode this
              type: 'PRODUCT',
              code: 200,
            };
          }

          // const category = categoryBackend.categories.find(c => c.url === url);
          // if (category) {
          //   return {
          //     id: category.id,
          //     url,
          //     // TODO(griest024): don't hardcode this
          //     type: 'CATEGORY',
          //     code: 200,
          //   };
          // }

          return DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION;
        },
      };
    },
  })
;
