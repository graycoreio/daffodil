import {
  Component,
  OnInit,
} from '@angular/core';
import {
  UntypedFormBuilder,
  Validators,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  selector: 'design-land-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: false,
})
export class DesignLandFormComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      inputTest1: ['', Validators.required],
    });
  }
}
