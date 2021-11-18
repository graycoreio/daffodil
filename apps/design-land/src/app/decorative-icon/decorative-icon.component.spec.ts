import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DesignLandDecorativeIconComponent } from './decorative-icon.component';

describe('DesignLandDecorativeIconComponent', () => {
  let component: DesignLandDecorativeIconComponent;
  let fixture: ComponentFixture<DesignLandDecorativeIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesignLandDecorativeIconComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandDecorativeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
