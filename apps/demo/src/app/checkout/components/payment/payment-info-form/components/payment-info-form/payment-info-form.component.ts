
import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffInputModule,
  DaffNativeSelectModule,
  DaffFormFieldModule,
} from '@daffodil/design';

import { PaymentInfoFormGroup } from '../../models/payment-form.type';

interface MonthOption {
  label: string;
  value: any;
};

interface YearOption {
  label: string;
  value: any;
};

const currentYear = new Date().getFullYear();

@Component({
  selector: 'demo-payment-info-form',
  templateUrl: './payment-info-form.component.html',
  styleUrls: ['./payment-info-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffNativeSelectModule,
    DaffFormFieldModule,
  ],
})
export class DemoCheckoutPaymentInfoFormComponent {
  @Input() formGroup: PaymentInfoFormGroup;

  monthSelectValues: MonthOption[] = [
    { label: '01', value: '01' },
    { label: '02', value: '02' },
    { label: '03', value: '03' },
    { label: '04', value: '04' },
    { label: '05', value: '05' },
    { label: '06', value: '06' },
    { label: '07', value: '07' },
    { label: '08', value: '08' },
    { label: '09', value: '09' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
  ];

  yearSelectValues: YearOption[] = Array(18).fill(null).map((_, i) => {
    const year = (currentYear + i).toString();
    return { label: year, value: year };
  });
}
