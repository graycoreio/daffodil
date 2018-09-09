import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { DaffFooterCategoryComponent } from './footer-category.component';

@Component({template: '<div class="host-element" daff-footer-category></div>'})
class TestDaffFooterCategoryComponentWrapper {}

describe('DaffFooterCategoryComponent', () => {
  let component: TestDaffFooterCategoryComponentWrapper;
  let fixture: ComponentFixture<TestDaffFooterCategoryComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffFooterCategoryComponent,
        TestDaffFooterCategoryComponentWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffFooterCategoryComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
