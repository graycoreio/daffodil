import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffErrorMessageComponent } from './error-message.component';

describe('DaffErrorMessageComponent', () => {
  let fixture: ComponentFixture<DaffErrorMessageComponent>;
  let component: DaffErrorMessageComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffErrorMessageComponent
       ]
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
