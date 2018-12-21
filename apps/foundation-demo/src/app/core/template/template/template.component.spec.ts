import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponent } from './template.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsletterModule } from '../../../newsletter/newsletter.module';

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
      imports: [
        RouterTestingModule,
        NewsletterModule
      ],
      declarations: [ 
        MockHeaderViewComponent,
        MockSidebarViewComponent,
        MockFooterComponent,
        TemplateComponent
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
