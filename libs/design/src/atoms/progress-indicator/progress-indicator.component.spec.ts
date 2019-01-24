import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffProgressIndicatorComponent } from './progress-indicator.component';

describe('DaffProgressIndicatorComponent', () => {
  let component: DaffProgressIndicatorComponent;
  let fixture: ComponentFixture<DaffProgressIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffProgressIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take `percentage` as an input', () =>{

  });

  it('should ')
});
