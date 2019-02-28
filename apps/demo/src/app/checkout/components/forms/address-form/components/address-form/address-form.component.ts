import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface RegionOption {
  label: string;
  value: any;
};

@Component({
  selector: 'demo-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {

  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;

  constructor() { }

  stateSelectValues: RegionOption[] = [
    {label:'State', value: ''},
    {label: 'Alabama', value: 'AL'},
    {label: 'Alaska', value: 'AK'}
  ];
}
