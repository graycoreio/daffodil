import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}