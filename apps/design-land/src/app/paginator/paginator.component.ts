import { Component } from '@angular/core';

@Component({
  selector: 'design-land-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  numberOfPages = 20;
  primaryCurrentPage = 2;
  secondaryCurrentPage1 = 3;

  onPageChange(pageNumber: number) {
    this.primaryCurrentPage = pageNumber;
  }

  onPageChange1(pageNumber: number) {
    this.secondaryCurrentPage1 = pageNumber;
  }

  update() {
    this.numberOfPages = 10;
  }
}
