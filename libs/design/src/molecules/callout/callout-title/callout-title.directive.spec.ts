import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffCalloutTitleDirective } from './callout-title.directive';

@Component({
  template: `
    <h3 daffCalloutTitle>Lorem Ipsum</h3>
  `
})
class WrapperComponent {}

describe('DaffCalloutTitleDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCalloutTitleDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffCalloutTitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCalloutTitle]',() => {
    it('should add a class of `daff-callout__title` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout__title')).toEqual(true);
    });
  });
}); 