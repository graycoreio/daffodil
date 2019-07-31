import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutComponent } from './callout.component';

describe('CalloutComponent', () => {
  let component: CalloutComponent;
  let fixture: ComponentFixture<CalloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalloutComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
