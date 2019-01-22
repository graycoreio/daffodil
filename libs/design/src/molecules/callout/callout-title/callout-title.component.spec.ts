import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffCalloutTitleComponent } from './callout-title.component';

@Component({
  template: `
    <h3 daff-callout-title>Lorem Ipsum</h3>
  `
})
class WrapperComponent {}

describe('DaffCalloutTitleComponent', () => {
  let calloutTitle: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCalloutTitleComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    calloutTitle = fixture.debugElement.query(By.css('[daff-callout-title]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(calloutTitle).toBeTruthy();
  });

  describe('[daff-callout-title]',() => {
    it('should add a class of `daff-callout__title` to its host element', () => {
      expect(calloutTitle.nativeElement.classList.contains('daff-callout__title')).toEqual(true);
    });
  });
}); 