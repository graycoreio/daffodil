import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'docs-checkbox-set',
  templateUrl: './checkbox-set.component.html',
  styleUrls: ['./checkbox-set.component.scss']
})
export class DocsCheckboxSetComponent {
  brands = new FormControl([], [Validators.required]);
  quantity = new FormControl(['12pack'], [Validators.required]);
}
