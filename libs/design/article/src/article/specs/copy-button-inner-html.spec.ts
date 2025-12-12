import {
  Component,
  DebugElement,
  inject,
  signal,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  fakeAsync,
} from '@angular/core/testing';
import {
  DomSanitizer,
  SafeHtml,
  By,
} from '@angular/platform-browser';

import { DaffArticleComponent } from '../article.component';

@Component({
  template: `<daff-article><div [innerHTML]="htmlContents()"></div></daff-article>`,
  imports: [
    DaffArticleComponent,
  ],
})
class InnerHtmlWrapperComponent {
  private sanitizer = inject(DomSanitizer);
  htmlContents = signal<SafeHtml>('');

  setHtml(html: string) {
    this.htmlContents.set(this.sanitizer.bypassSecurityTrustHtml(html));
  }
}

describe('@daffodil/design/article | DaffArticleComponent | innerHTML', () => {
  let fixture: ComponentFixture<InnerHtmlWrapperComponent>;
  let de: DebugElement;
  let wrapper: InnerHtmlWrapperComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        InnerHtmlWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerHtmlWrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-article'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when innerHTML contains code blocks', () => {
    beforeEach(fakeAsync(() => {
      wrapper.setHtml(`
        <pre><code>const x = 1;</code></pre>
        <pre><code>const y = 2;</code></pre>
      `);
      fixture.detectChanges();
    }));

    it('should add copy buttons to code blocks', () => {
      const copyButtons = de.nativeElement.querySelectorAll('daff-article-copy-button');
      expect(copyButtons.length).toBe(2);
    });

    it('should insert copy buttons into pre elements before code', () => {
      const preElements = de.nativeElement.querySelectorAll('pre');
      preElements.forEach((pre) => {
        const button = pre.querySelector('daff-article-copy-button');
        const code = pre.querySelector('code');
        expect(button).toBeTruthy();
        expect(button.nextElementSibling).toBe(code);
      });
    });
  });

  describe('when innerHTML contains code blocks with nocopy attribute', () => {
    beforeEach(fakeAsync(() => {
      wrapper.setHtml(`
        <pre><code>const x = 1;</code></pre>
        <pre nocopy><code>const y = 2;</code></pre>
      `);
      fixture.detectChanges();
    }));

    it('should not add copy button to code blocks with nocopy attribute', () => {
      const copyButtons = de.nativeElement.querySelectorAll('daff-article-copy-button');
      expect(copyButtons.length).toBe(1);
    });

    it('should not have copy button in pre with nocopy attribute', () => {
      const nocopyPre = de.nativeElement.querySelector('pre[nocopy]');
      const button = nocopyPre.querySelector('daff-article-copy-button');
      expect(button).toBeFalsy();
    });
  });

  describe('when innerHTML is updated with new content', () => {
    beforeEach(fakeAsync(() => {
      wrapper.setHtml(`<pre><code>const x = 1;</code></pre>`);
      fixture.detectChanges();
    }));

    it('should add copy buttons to new code blocks when content changes', fakeAsync(() => {
      let copyButtons = de.nativeElement.querySelectorAll('daff-article-copy-button');
      expect(copyButtons.length).toBe(1);

      wrapper.setHtml(`
        <pre><code>const a = 1;</code></pre>
        <pre><code>const b = 2;</code></pre>
        <pre><code>const c = 3;</code></pre>
      `);
      fixture.detectChanges();

      copyButtons = de.nativeElement.querySelectorAll('daff-article-copy-button');
      expect(copyButtons.length).toBe(3);
    }));
  });
});
