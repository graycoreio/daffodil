import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface MonthOption {
  label: string;
  value: any;
};

interface YearOption {
  label: string;
  value: any;
};

@Component({
  selector: 'demo-payment-info-form',
  templateUrl: './payment-info-form.component.html',
  styleUrls: ['./payment-info-form.component.scss']
})
export class PaymentInfoFormComponent {

  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;

  constructor() { }

  monthSelectValues: MonthOption[] = [
    {label:'Month', value: ''},
    {label: '01', value: '01'},
    {label: '02', value: '02'},
    {label: '03', value: '03'},
    {label: '04', value: '04'},
    {label: '05', value: '05'},
    {label: '06', value: '06'},
    {label: '07', value: '07'},
    {label: '08', value: '08'},
    {label: '09', value: '09'},
    {label: '10', value: '10'},
    {label: '11', value: '11'},
    {label: '12', value: '12'},
  ];

  yearSelectValues: YearOption[] = [
    {label: 'Year', value: ''},
    {label: '2021', value: '2021'},
    {label: '2022', value: '2022'},
    {label: '2023', value: '2023'}
  ];
}
