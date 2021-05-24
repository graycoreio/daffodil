import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'design-land-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class DesignLandTextAreaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      textareaExample: ['', Validators.required],
    });
  }
}
