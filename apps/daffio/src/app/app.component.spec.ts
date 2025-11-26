import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  TestBed,
  ComponentFixture,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { DaffioAppComponent } from './app.component';


describe('DaffioAppComponent', () => {
  let fixture: ComponentFixture<DaffioAppComponent>;
  let app: DaffioAppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      imports: [
        DaffioAppComponent,
      ],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioAppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', waitForAsync(() => {
    expect(app).toBeTruthy();
  }));

  it('should render a <router-outlet>', () => {
    expect(fixture.debugElement.query(By.css('router-outlet'))).not.toBeNull();
  });
});
