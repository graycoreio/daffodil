import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { DaffFooterIconsComponent } from './footer-icons.component';
import { By } from '@angular/platform-browser';

@Component({template: '<div class="host-element" daff-footer-icons></div>'})
class TestDaffFooterIconsComponentWrapper {}

describe('DaffFooterIconsComponent', () => {
  let component: TestDaffFooterIconsComponentWrapper;
  let fixture: ComponentFixture<TestDaffFooterIconsComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffFooterIconsComponentWrapper,
        DaffFooterIconsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffFooterIconsComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add daff-footer__icons class to host element', () => {
    let hostElement = fixture.debugElement.query(By.css('.host-element')).nativeElement;
    expect(hostElement.classList.contains('daff-footer__icons')).toBeTruthy();
  });
});
