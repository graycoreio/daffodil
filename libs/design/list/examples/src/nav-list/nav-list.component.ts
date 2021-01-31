import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav-list',
  templateUrl: './nav-list.component.html'
})
export class NavListComponent {
  faChevronRight = faChevronRight;
}