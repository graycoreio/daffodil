import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioWhyPwaViewComponent } from './why-pwa-view.component';

describe('DaffioWhyPwaViewComponent', () => {
  let component: DaffioWhyPwaViewComponent;
  let fixture: ComponentFixture<DaffioWhyPwaViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        DaffioWhyPwaViewComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioWhyPwaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
