import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { faUser, faEyeSlash, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'docs-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class DocsFormFieldComponent {
  faUser = faUser;
  faEyeSlash = faEyeSlash;
  faDollarSign = faDollarSign;

  fullname = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  newpassword = new FormControl('');
  confirmpassword = new FormControl('', [Validators.required]);
  firstName = new FormControl('');
  password = new FormControl('');
  amount = new FormControl('');
}
