import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDirective } from './panel.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div class="panel-wrapper" panel></div>'})
class TestPanelWrapper {}

describe('PanelDirective', () => {
  let component: TestPanelWrapper;
  let fixture: ComponentFixture<TestPanelWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestPanelWrapper,
        PanelDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPanelWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `accordion__panel` to its host', () => {
    let accordionItemTitleWrapper = fixture.debugElement.query(By.css('.panel-wrapper'));

    expect(accordionItemTitleWrapper.nativeElement.classList.contains('accordion__panel')).toBeTruthy();
  });
});
