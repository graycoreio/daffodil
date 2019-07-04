import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

import { ApiDocsListViewComponent } from './api-docs-list-view.component';

@Component({selector: 'daffio-api-docs-list-container', template: ''})
class MockDaffioApiDocsListContainer {}

describe('ApiDocsListViewComponent', () => {
  let component: ApiDocsListViewComponent;
  let fixture: ComponentFixture<ApiDocsListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ApiDocsListViewComponent,
        MockDaffioApiDocsListContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
