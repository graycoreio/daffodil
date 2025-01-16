import { Component } from '@angular/core';

@Component({
  selector: 'demo-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: false,
})
export class NotFoundComponent {
  NOT_FOUND_TEXT = 'this page cannot be found: 404 error';
}
