import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLandMessageBarComponent } from './message-bar.component';

describe('DesignLandMessageBarComponent', () => {
  let component: DesignLandMessageBarComponent;
  let fixture: ComponentFixture<DesignLandMessageBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandMessageBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandMessageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
