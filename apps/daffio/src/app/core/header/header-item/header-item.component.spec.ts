import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffioHeaderItemComponent } from './header-item.component';

@Component({template: '<div daffio-header-item>Item</div>'})
class TestWrapper {}

describe('DaffioHeaderItemComponent', () => {
  let component: TestWrapper;
  let fixture: ComponentFixture<TestWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestWrapper,
        DaffioHeaderItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapper);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
