import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponent } from './template.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({selector: 'header-view', template: ''})
class MockHeaderViewComponent {}

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        MockHeaderViewComponent,
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
