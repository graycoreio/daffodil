import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffDocsCopyCodeBlockDirective } from './copy-code-block.directive';
import { DaffDocsCopyButtonComponent } from '../copy-button/copy-button.component';

@Component({
  template: `
    <div daffDocsCopyCodeBlock [innerHTML]="htmlContent"></div>
  `,
  standalone: true,
  imports: [DaffDocsCopyCodeBlockDirective],
})
class TestComponent {
  htmlContent = `
    <p>Some text</p>
    <pre><code>const example = 'code';</code></pre>
    <pre><code>const another = 'example';</code></pre>
  `;
}

describe('@daffodil/docs | DaffDocsCopyCodeBlockDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directiveElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    directiveElement = fixture.debugElement.query(By.directive(DaffDocsCopyCodeBlockDirective)).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find all code blocks', () => {
    const codeBlocks = directiveElement.querySelectorAll('pre code');
    expect(codeBlocks.length).toBe(2);
  });

  it('should add a copy button for each code block', () => {
    const buttons = fixture.debugElement.queryAll(By.directive(DaffDocsCopyButtonComponent));
    expect(buttons.length).toBe(2);
  });

  it('should wrap each pre element in a positioned container', () => {
    const wrappers = directiveElement.querySelectorAll('div[style*="position: relative"]');
    expect(wrappers.length).toBe(2);
  });

  it('should position buttons absolutely', () => {
    const buttons = fixture.debugElement.queryAll(By.directive(DaffDocsCopyButtonComponent));
    buttons.forEach(button => {
      const style = button.nativeElement.style;
      expect(style.position).toBe('absolute');
      expect(style.top).toBe('0.3rem');
      expect(style.right).toBe('0.3rem');
    });
  });

  it('should pass the code content to the copy button', () => {
    const buttons = fixture.debugElement.queryAll(By.directive(DaffDocsCopyButtonComponent));
    const firstButton = buttons[0].componentInstance;
    const secondButton = buttons[1].componentInstance;

    expect(firstButton.content()).toBe('const example = \'code\';');
    expect(secondButton.content()).toBe('const another = \'example\';');
  });

  describe('when content changes', () => {
    beforeEach(() => {
      component.htmlContent = `<pre><code>new content</code></pre>`;
      fixture.detectChanges();
    });

    it('should update the buttons', () => {
      const buttons = fixture.debugElement.queryAll(By.directive(DaffDocsCopyButtonComponent));
      expect(buttons.length).toBe(1);
      expect(buttons[0].componentInstance.content()).toBe('new content');
    });
  });
});
