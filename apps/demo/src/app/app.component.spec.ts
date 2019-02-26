import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { DemoRoutingComponentModule } from './routing/routing-component.module';

@Component({selector: 'demo-product-grid-view', template: ''})
class MockProductGridContainer {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DemoRoutingComponentModule
      ],
      declarations: [
        AppComponent,
        MockProductGridContainer
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
