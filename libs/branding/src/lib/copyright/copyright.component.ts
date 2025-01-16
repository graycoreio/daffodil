import { Component } from '@angular/core';

@Component({
  selector: 'daff-branding-copyright',
  templateUrl: './copyright.component.html',
  standalone: false,
})
export class DaffCopyrightComponent {
  today: number = Date.now();
}
