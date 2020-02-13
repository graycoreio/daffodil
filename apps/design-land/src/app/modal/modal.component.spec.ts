import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLandModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: DesignLandModalComponent;
  let fixture: ComponentFixture<DesignLandModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
