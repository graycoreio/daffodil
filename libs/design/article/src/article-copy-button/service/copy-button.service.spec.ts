import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffArticleCopyButtonService } from './copy-button.service';

describe('@daffodil/design/article | DaffArticleCopyButtonService', () => {
  let service: DaffArticleCopyButtonService;
  let mockViewContainerRef: jasmine.SpyObj<ViewContainerRef>;
  let hostElement: HTMLElement;

  beforeEach(() => {
    mockViewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['createComponent']);

    TestBed.configureTestingModule({
      providers: [DaffArticleCopyButtonService],
    });

    service = TestBed.inject(DaffArticleCopyButtonService);

    // Create a test host element with code blocks
    hostElement = document.createElement('div');
    hostElement.innerHTML = `
      <pre><code>const x = 1;</code></pre>
      <pre><code>const y = 2;</code></pre>
    `;
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('addCopyButtonsToCodeBlocks', () => {
    it('should find all pre elements', () => {
      const createComponentSpy = mockViewContainerRef.createComponent.and.returnValue(<any>{
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('daff-article-copy-button'),
        },
      });

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);

      expect(createComponentSpy).toHaveBeenCalledTimes(2);
    });

    it('should insert button into pre before code element', () => {
      let callCount = 0;
      mockViewContainerRef.createComponent.and.callFake(() => {
        const buttonElement = document.createElement('daff-article-copy-button');
        buttonElement.id = `button-${callCount++}`;
        return <any>{
          setInput: jasmine.createSpy('setInput'),
          location: {
            nativeElement: buttonElement,
          },
        };
      });

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);

      const preElements = hostElement.querySelectorAll('pre');
      expect(preElements.length).toBe(2);

      preElements.forEach((pre) => {
        const button = pre.querySelector('daff-article-copy-button');
        const code = pre.querySelector('code');
        expect(button).toBeTruthy();
        expect(code).toBeTruthy();
        // Button should be before code
        expect(button.nextElementSibling).toBe(code);
      });
    });

    it('should skip pre elements without code', () => {
      hostElement.innerHTML = '<pre></pre>';

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);

      expect(mockViewContainerRef.createComponent).not.toHaveBeenCalled();
    });

    it('should skip pre elements with nocopy attribute', () => {
      hostElement.innerHTML = '<pre nocopy><code>const x = 1;</code></pre>';

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);

      expect(mockViewContainerRef.createComponent).not.toHaveBeenCalled();
    });

    it('should skip pre elements that already have a copy button', () => {
      mockViewContainerRef.createComponent.and.callFake(() => (<any>{
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('daff-article-copy-button'),
        },
      }));

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);
      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);

      expect(mockViewContainerRef.createComponent).toHaveBeenCalledTimes(2);
    });

    it('should skip pre elements inside article-encapsulated elements', () => {
      hostElement.innerHTML = `
        <pre><code>Should get button</code></pre>
        <div class="daff-ae">
          <pre><code>Should be skipped</code></pre>
          <div>
            <pre><code>Should be skipped</code></pre>
          </div>
        </div>
        <pre><code>Should also get button</code></pre>
      `;

      mockViewContainerRef.createComponent.and.returnValue(<any>{
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('daff-article-copy-button'),
        },
      });

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);
      expect(mockViewContainerRef.createComponent).toHaveBeenCalledTimes(2);
    });
  });

  describe('cleanup', () => {
    it('should destroy all button references', () => {
      const mockButtonRef = {
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('daff-article-copy-button'),
        },
        destroy: jasmine.createSpy('destroy'),
      };

      mockViewContainerRef.createComponent.and.returnValue(<any>mockButtonRef);

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);
      service.cleanup();

      expect(mockButtonRef.destroy).toHaveBeenCalledTimes(2);
    });
  });
});
