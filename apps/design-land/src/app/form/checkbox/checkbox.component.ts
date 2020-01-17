import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'docs-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class DocsCheckboxComponent {
  simpleCheckbox = new FormControl(false);
  valueCheckbox = new FormControl({ value: 'example', status: true });

  tmp() {
    this.simpleCheckbox.setValue(!this.simpleCheckbox.value);
  }
}
