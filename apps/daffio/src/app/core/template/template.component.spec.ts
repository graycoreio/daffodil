import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { TemplateComponent } from './template.component';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;
  let sidebarViewport: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        TemplateComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    sidebarViewport = fixture.debugElement.query(By.css('daffio-sidebar-viewport-container'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a <router-outlet> inside a <daffio-sidebar-viewport-container>', () => {
    expect(sidebarViewport.query(By.css('router-outlet'))).not.toBeNull();
  });
});
