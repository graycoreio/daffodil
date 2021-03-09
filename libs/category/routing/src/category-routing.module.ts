import { NgModule } from '@angular/core';

import { DaffDefaultCategoryPageSize } from './resolvers/public_api';

@NgModule({
  providers: [
    { provide: DaffDefaultCategoryPageSize, useValue: 12 },
  ],
})
export class DaffCategoryRoutingModule {}
