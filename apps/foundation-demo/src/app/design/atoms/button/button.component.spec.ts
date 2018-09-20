import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

@Component({
  template: `
    <a daff-button>Link Daff Button</a>
    <a daff-icon-button>Link Daff Icon Button</a>
    <button daff-button>Button Daff Button</button>
    <button daff-icon-button>Button Daff Icon Button</button>
  `
})
class TestButtonWrapper {}

fdescribe('ButtonComponent', () => {
  let component: TestButtonWrapper;
  let fixture: ComponentFixture<TestButtonWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ButtonComponent,
        TestButtonWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('daff-button',() => {
    it('should add a class of `daff-button` to its host element', () => {
      
    });
  });

  describe('daff-icon-button', () => {
    it('should add a class of `daff-icon-button` to its host element', () => {

    });
  }); 
});
