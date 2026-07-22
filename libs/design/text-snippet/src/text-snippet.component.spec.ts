import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  TestBed,
  ComponentFixture,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffTextSnippetComponent } from '@daffodil/design/text-snippet';

@Component({
  template: '<daff-text-snippet [condensed]="condensed" [html]="html">content</daff-text-snippet>',
  imports: [
    DaffTextSnippetComponent,
  ],
})

class WrapperComponent {
  condensed: boolean;
  html = '';
}

describe('@daffodil/design/text-snippet | DaffTextSnippetComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let component: DaffTextSnippetComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-text-snippet'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

  it('should add a class of "daff-text-snippet" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-text-snippet': true,
    }));
  });

  it('should pass through any html as `innerHtml` on the `html` div inside the component', () => {
    wrapper.html = '<h1>Some Content</h1>';
    fixture.detectChanges();
    const htmlHolder = fixture.debugElement.query(By.css('.daff-text-snippet__html'));
    expect(htmlHolder).toBeTruthy();
    expect(htmlHolder.nativeElement.innerHTML).toEqual(wrapper.html);
  });

  it('should securely pass-through html onto the `html` div', () => {
    wrapper.html = '<script>alert("hello")</script>';
    fixture.detectChanges();
    const htmlHolder = fixture.debugElement.query(By.css('.daff-text-snippet__html'));
    expect(htmlHolder).toBeTruthy();
    expect(htmlHolder.nativeElement.innerHTML).toEqual('');
  });

  it('should hide the other content if `html` is set', () => {
    wrapper.html = '<div></div>';
    fixture.detectChanges();
    const contentHolder = fixture.debugElement.query(By.css('.daff-text-snippet__ngcontent'));
    expect(contentHolder).toBeFalsy();
  });

  it('should show the other content if `html` is falsy', () => {
    wrapper.html = '';
    fixture.detectChanges();
    const contentHolder = fixture.debugElement.query(By.css('.daff-text-snippet__ngcontent'));
    expect(contentHolder).toBeTruthy();
  });

  it('should hide the html holder if `html` is falsy', () => {
    wrapper.html = '';
    fixture.detectChanges();
    const contentHolder = fixture.debugElement.query(By.css('.daff-text-snippet__html'));
    expect(contentHolder).toBeFalsy();
  });

  describe('condensed property', () => {
    it('should set condensed to true by default', () => {
      expect(component.condensed()).toEqual(true);
    });
  });

  it('should apply a `condensed` class to the content when `condensed` is true', () => {
    wrapper.condensed = true;
    fixture.detectChanges();

    expect(de.query(By.css('.daff-text-snippet__content')).classes.condensed).toBeTruthy();
  });

  it('should set aria-expanded to true when text snippet is not condensed', () => {
    const toggle = fixture.debugElement.query(By.css('.daff-text-snippet__toggle')).nativeElement;
    wrapper.condensed = false;
    fixture.detectChanges();

    expect(toggle.attributes['aria-expanded'].value).toEqual('true');
  });

  it('should set aria-expanded to false when text snippet is condensed', () => {
    const toggle = fixture.debugElement.query(By.css('.daff-text-snippet__toggle')).nativeElement;
    wrapper.condensed = true;
    fixture.detectChanges();

    expect(toggle.attributes['aria-expanded'].value).toEqual('false');
  });
});
