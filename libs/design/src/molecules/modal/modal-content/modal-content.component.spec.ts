import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffModalContentComponent } from './modal-content.component';

describe('DaffModalContentComponent', () => {
  let component: DaffModalContentComponent;
  let fixture: ComponentFixture<DaffModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffModalContentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
