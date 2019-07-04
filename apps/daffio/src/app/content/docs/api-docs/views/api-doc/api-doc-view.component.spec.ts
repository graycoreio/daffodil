import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

import { ApiDocViewComponent } from './api-doc-view.component';

@Component({selector: 'daffio-api-doc-container', template: ''})
class MockDaffioApiDocContainer {}

describe('ApiDocViewComponent', () => {
  let component: ApiDocViewComponent;
  let fixture: ComponentFixture<ApiDocViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ApiDocViewComponent,
        MockDaffioApiDocContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
