import { Component } from '@angular/core';

import { BestSellersComponent } from '../../product/containers/best-sellers/best-sellers.component';

@Component({
  selector: 'demo-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  imports: [
    BestSellersComponent,
  ],
})
export class NotFoundComponent {
  NOT_FOUND_TEXT = 'this page cannot be found: 404 error';
}
