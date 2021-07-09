import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  NgControl,
  FormControl,
} from '@angular/forms';
import { of } from 'rxjs';

import { DaffQuantitySelectComponent } from './quantity-select.component';

describe('DaffQuantitySelectComponent', () => {
  let component: DaffQuantitySelectComponent;
  let fixture: ComponentFixture<DaffQuantitySelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffQuantitySelectComponent ],
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
    fixture = TestBed.createComponent(DaffQuantitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
