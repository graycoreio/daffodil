import { DemoCartViewComponent } from "./pages/cart-view/cart-view.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const category: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DemoCartViewComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(category)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoCartRoutingModule {}