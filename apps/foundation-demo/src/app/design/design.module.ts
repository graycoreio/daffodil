import { NgModule } from '@angular/core';

import { MoleculesModule } from './molecules/molecules.module';

@NgModule({
  imports: [
    MoleculesModule
  ],
  exports: [
    MoleculesModule
  ]
})
export class DesignModule { }
