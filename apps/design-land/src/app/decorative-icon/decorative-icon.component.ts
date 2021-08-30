import { Component } from '@angular/core';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'design-land-decorative-icon',
  templateUrl: './decorative-icon.component.html',
  styleUrls: ['./decorative-icon.component.scss'],
})
export class DesignLandDecorativeIconComponent {
  faMobile = faMobile;
}
