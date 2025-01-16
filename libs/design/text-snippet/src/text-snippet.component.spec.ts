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

import { DaffButtonModule } from '@daffodil/design/button';

import { DaffTextSnippetComponent } from './text-snippet.component';

@Component({
  template: '<daff-text-snippet [condensed]="condensed" [html]="html">content</daff-text-snippet>',
  imports: [
    DaffButtonModule,
    DaffTextSnippetComponent,
  ],
})

class WrapperComponent {
  condensed = true;
  html = '';
}

describe('DaffTextSnippetComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let component: DaffTextSnippetComponent;
  let componentDe: DebugElement;

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
    componentDe = fixture.debugElement.query(By.css('daff-text-snippet'));
    component = componentDe.componentInstance;
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
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

  it('should apply a `condensed` class to the content when `condensed` is true', () => {
    wrapper.condensed = true;
    fixture.detectChanges();

    expect(componentDe.query(By.css('.daff-text-snippet__content')).classes['condensed']).toBeTruthy();
  });
});
