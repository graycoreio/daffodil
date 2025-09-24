import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffErrorMessageComponent } from './error-message.component';

describe('@daffodil/design/form-field | DaffErrorMessageComponent', () => {
  let fixture: ComponentFixture<DaffErrorMessageComponent>;
  let component: DaffErrorMessageComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffErrorMessageComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
