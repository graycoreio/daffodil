import { Component } from '@angular/core';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'design-land-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  faTwitter = faTwitter;
}
