import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffModalActionsComponent } from './modal-actions.component';

describe('DaffModalActionsComponent', () => {
  let component: DaffModalActionsComponent;
  let fixture: ComponentFixture<DaffModalActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffModalActionsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffModalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
