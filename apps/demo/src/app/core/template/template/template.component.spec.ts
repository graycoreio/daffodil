import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponent } from './template.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsletterModule } from '../../../newsletter/newsletter.module';
import { StoreModule } from '@ngrx/store';

@Component({selector: 'demo-header-container', template: ''})
class MockHeaderViewComponent {}

@Component({selector: 'demo-sidebar-viewport-container', template: ''})
class MockSidebarViewComponent {}

@Component({selector: 'demo-footer', template: ''})
class MockFooterComponent {}


describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TemplateComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
