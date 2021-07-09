import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  FormControl,
  NgControl,
} from '@angular/forms';
import { of } from 'rxjs';

import { DaffQuantityInputComponent } from './quantity-input.component';

describe('DaffQuantityInputComponent', () => {
  let component: DaffQuantityInputComponent;
  let fixture: ComponentFixture<DaffQuantityInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffQuantityInputComponent,
      ],
      providers: [
        {
          provide: NgControl,
          useValue: {
            statusChanges: of(),
            value: null,
            control: new FormControl(),
          },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffQuantityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
