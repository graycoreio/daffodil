import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponent } from './template.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsletterModule } from '../../../newsletter/newsletter.module';

@Component({selector: 'foundation-header-container', template: ''})
class MockHeaderViewComponent {}

@Component({selector: 'sidebar-viewport-container', template: ''})
class MockSidebarViewComponent {}

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
