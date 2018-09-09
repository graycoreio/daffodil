import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFooterCategoryTitleComponent } from './footer-category-title.component';
import { By } from '@angular/platform-browser';

@Component({template: '<div class="host-element" daff-footer-category-title></div>'})
class TestDaffFooterCategoryTitleComponentWrapper {}

describe('DaffFooterCategoryTitleComponent', () => {
  let component: TestDaffFooterCategoryTitleComponentWrapper;
  let fixture: ComponentFixture<TestDaffFooterCategoryTitleComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffFooterCategoryTitleComponent,
        TestDaffFooterCategoryTitleComponentWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffFooterCategoryTitleComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add daff-footer__category-title class to host element', () => {
    let hostElement = fixture.debugElement.query(By.css('.host-element')).nativeElement;
    expect(hostElement.classList.contains('daff-footer__category-title')).toBeTruthy();
  });
});
