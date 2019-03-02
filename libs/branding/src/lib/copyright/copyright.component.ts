import { Component } from '@angular/core';

@Component({
  selector: 'daff-copyright',
  templateUrl: './copyright.component.html',
})
export class DaffCopyrightComponent {
  today: number = Date.now();
}
