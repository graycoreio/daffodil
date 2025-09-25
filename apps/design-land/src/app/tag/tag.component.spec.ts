import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DesignLandTagComponent } from './tag.component';

describe('DesignLandTagComponent', () => {
  let component: DesignLandTagComponent;
  let fixture: ComponentFixture<DesignLandTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandTagComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
