import { Component } from '@angular/core';

@Component({
  selector: 'design-land-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: false,
})
export class DesignLandPaginatorComponent {
  numberOfPages = 20;
  primaryCurrentPage = 2;
  secondaryCurrentPage = 3;
  tertiaryCurrentPage = 4;
  themeCurrentPage = 5;
  themeContrastCurrentPage = 6;
  blackCurrentPage = 7;
  whiteCurrentPage = 8;

  onPageChange(pageNumber: number) {
    this.primaryCurrentPage = pageNumber;
  }

  onPageChange1(pageNumber: number) {
    this.secondaryCurrentPage = pageNumber;
  }

  onPageChange2(pageNumber: number) {
    this.tertiaryCurrentPage = pageNumber;
  }

  onPageChange3(pageNumber: number) {
    this.themeCurrentPage = pageNumber;
  }

  onPageChange4(pageNumber: number) {
    this.themeContrastCurrentPage = pageNumber;
  }

  onPageChange5(pageNumber: number) {
    this.blackCurrentPage = pageNumber;
  }

  onPageChange6(pageNumber: number) {
    this.whiteCurrentPage = pageNumber;
  }

  update() {
    this.numberOfPages = 10;
  }
}
