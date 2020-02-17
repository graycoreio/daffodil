import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformerOut, TransformerIn, QueryManager, Driver } from '.';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class PlatformDriverModule {
  static forRoot(): ModuleWithProviders<PlatformDriverModule> {
    return {
      ngModule: PlatformDriverModule,
      providers: [
        TransformerOut,
        TransformerIn,
        QueryManager,
        Driver
      ]
    };
  }
}
