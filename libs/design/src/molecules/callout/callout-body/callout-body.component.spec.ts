import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffCalloutBodyComponent } from './callout-body.component';

@Component({
  template: `
    <p daff-callout-body>Lorem Ipsum</p>
  `
})
class WrapperComponent {}

describe('DaffCalloutBodyComponent', () => {
  let wrapper: WrapperComponent;
  let calloutBody: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCalloutBodyComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    calloutBody = fixture.debugElement.query(By.css('[daff-callout-body]'));
    wrapper = calloutBody.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-callout__body` to its host element', () => {
    expect(calloutBody.nativeElement.classList.contains('daff-callout__body')).toEqual(true);
  });
}); 