import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-list',
  templateUrl: './nav-list.component.html'
})
export class NavListComponent {
  faChevronRight = faChevronRight;
}