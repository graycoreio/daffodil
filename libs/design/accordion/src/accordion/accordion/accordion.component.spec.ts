import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffAccordionComponent } from './accordion.component';

describe('@daffodil/design/accordion | DaffAccordionComponent', () => {
  let component: DaffAccordionComponent;
  let fixture: ComponentFixture<DaffAccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffAccordionComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffAccordionComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
