import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpBoxComponent } from './help-box.component';

describe('HelpBoxComponent', () => {
  let component: HelpBoxComponent;
  let fixture: ComponentFixture<HelpBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
