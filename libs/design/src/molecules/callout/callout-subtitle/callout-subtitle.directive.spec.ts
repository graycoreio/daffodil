import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffCalloutSubtitleDirective } from './callout-subtitle.directive';

@Component({
  template: `
    <p daffCalloutSubtitle>Lorem Ipsum</p>
  `
})
class WrapperComponent {}

describe('DaffCalloutSubtitleDirective', () => {
  let wrapper: WrapperComponent;
  let calloutSubtitle: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCalloutSubtitleDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    calloutSubtitle = fixture.debugElement.query(By.css('[daffCalloutSubtitle]'));
    wrapper = calloutSubtitle.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCalloutSubtitle]',() => {
    it('should add a class of `daff-callout__subtitle` to its host element', () => {
      expect(calloutSubtitle.nativeElement.classList.contains('daff-callout__subtitle')).toEqual(true);
    });
  });
}); 