import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent { 
  NOT_FOUND_TEXT: string = 'this page cannot be found: 404 error';
}
