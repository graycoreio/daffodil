import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffModalTitleDirective } from './modal-title.directive';

@Component({
  template: `
    <h2 daffModalTitle>Lorem Ipsum</h2>
  `
})
class WrapperComponent {}

describe('DaffModalTitleDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffModalTitleDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffModalTitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffModalTitle]',() => {
    it('should add a class of `daff-modal-title` to its host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-modal-title': true,
      }));
    });
  });
}); 