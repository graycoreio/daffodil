import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffSearchDriver,
  provideDaffSearchDriver,
} from '@daffodil/search/driver';

import { provideDaffSearchAlgoliaConfig } from './config/public_api';
import { DaffSearchAlgoliaDriver } from './search.service';
import { AlgoliaSearchCollectionTransformer } from './transformers/collection.service';

/**
 * Provides the {@link DaffSearchAlgoliaDriver} as the {@link DaffSearchDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AlgoliaSearchCollectionTransformer,
  ],
})
export class DaffSearchAlgoliaDriverModule {
  static forRoot(config: Parameters<typeof provideDaffSearchAlgoliaConfig>[0]): ModuleWithProviders<DaffSearchAlgoliaDriverModule> {
    return {
      ngModule: DaffSearchAlgoliaDriverModule,
      providers: [
        provideDaffSearchDriver(DaffSearchAlgoliaDriver),
        provideDaffSearchAlgoliaConfig(config),
      ],
    };
  }

  static forFeature(config: Parameters<typeof provideDaffSearchAlgoliaConfig>[0]): ModuleWithProviders<DaffSearchAlgoliaDriverModule> {
    return {
      ngModule: DaffSearchAlgoliaDriverModule,
      providers: [
        {
          provide: DaffSearchDriver,
          useClass: DaffSearchAlgoliaDriver,
        },
        provideDaffSearchAlgoliaConfig(config),
      ],
    };
  }
}
