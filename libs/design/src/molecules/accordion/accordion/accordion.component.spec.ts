import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffAccordionComponent } from './accordion.component';

describe('DaffAccordionComponent', () => {
  let component: DaffAccordionComponent;
  let fixture: ComponentFixture<DaffAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffAccordionComponent
      ]
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
