import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
