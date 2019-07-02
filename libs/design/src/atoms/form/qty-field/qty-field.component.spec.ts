import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffQtyFieldComponent } from './qty-field.component';

describe('DaffQtyFieldComponent', () => {
  let component: DaffQtyFieldComponent;
  let fixture: ComponentFixture<DaffQtyFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffQtyFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffQtyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('focus states of the qty-field', () => {
    it('should focus the input when the text field appears', () => {

    });

    it('should not focus the input if the select field was not previously the focus', () => {

    });
  })
});
