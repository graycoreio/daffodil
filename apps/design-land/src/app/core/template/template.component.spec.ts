import {
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

import { DesignLandTemplateComponent } from './template.component';

describe('DesignLandTemplateComponent', () => {
  let component: DesignLandTemplateComponent;
  let fixture: ComponentFixture<DesignLandTemplateComponent>;
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
        DesignLandTemplateComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    sidebarViewport = fixture.debugElement.query(By.css('design-land-sidebar-viewport'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a <router-outlet> inside a <design-land-sidebar-viewport>', () => {
    expect(sidebarViewport.query(By.css('router-outlet'))).not.toBeNull();
  });
});
