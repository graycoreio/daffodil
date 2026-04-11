import { Component } from '@angular/core';
import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { DemoIndicatorComponent } from './routing/indicator/indicator.component';

@Component({
  selector: 'demo-product-grid-view', template: '',
  standalone: false,
})
class MockProductGridContainer {}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppComponent,
        DemoIndicatorComponent,
      ],
      declarations: [
        MockProductGridContainer,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
