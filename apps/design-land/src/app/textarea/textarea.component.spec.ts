import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DesignLandTextareaComponent } from './textarea.component';

describe('DesignLandInputComponent', () => {
  let component: DesignLandTextareaComponent;
  let fixture: ComponentFixture<DesignLandTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DesignLandTextareaComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
