import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  TestBed,
  ComponentFixture,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

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
        RouterTestingModule,
      ],
      declarations: [
        DaffioAppComponent,
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
