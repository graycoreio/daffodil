import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
} from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { TemplateComponent } from './template.component';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;
  let sidebarViewport: DebugElement;

  beforeEach(async(() => {
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

  it('should render a <daffio-header-container>', () => {
    expect(fixture.debugElement.query(By.css('daffio-header-container'))).not.toBeNull();
  });

  it('should render a <router-outlet> inside a <daffio-sidebar-viewport-container>', () => {
    expect(sidebarViewport.query(By.css('router-outlet'))).not.toBeNull();
  });
});
