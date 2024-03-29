import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffioFeatureComparisonComponent } from './feature-comparison.component';

describe('DaffioFeatureComparisonComponent', () => {
  let component: DaffioFeatureComparisonComponent;
  let fixture: ComponentFixture<DaffioFeatureComparisonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FontAwesomeModule,
      ],
      declarations: [
        DaffioFeatureComparisonComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioFeatureComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
