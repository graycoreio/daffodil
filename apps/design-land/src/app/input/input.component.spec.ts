import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DesignLandInputComponent } from './input.component';

describe('DesignLandInputComponent', () => {
  let component: DesignLandInputComponent;
  let fixture: ComponentFixture<DesignLandInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DesignLandInputComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
