import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CodeBlockCopyButtonService } from './copy-code-block.service';

describe('@daffodil/docs | CodeBlockCopyButtonService', () => {
  let service: CodeBlockCopyButtonService;
  let mockViewContainerRef: jasmine.SpyObj<ViewContainerRef>;
  let hostElement: HTMLElement;

  beforeEach(() => {
    mockViewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['createComponent']);

    TestBed.configureTestingModule({
      providers: [CodeBlockCopyButtonService],
    });

    service = TestBed.inject(CodeBlockCopyButtonService);

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
          nativeElement: document.createElement('div'),
        },
      });

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);

      expect(createComponentSpy).toHaveBeenCalledTimes(2);
    });

    it('should append button to pre element', () => {
      let callCount = 0;
      mockViewContainerRef.createComponent.and.callFake(() => {
        const buttonElement = document.createElement('button');
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
      expect(preElements[0].querySelector('button')).toBeTruthy();
      expect(preElements[1].querySelector('button')).toBeTruthy();
    });

    it('should skip pre elements without code', () => {
      hostElement.innerHTML = '<pre></pre>';

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);

      expect(mockViewContainerRef.createComponent).not.toHaveBeenCalled();
    });

    it('should set pre position to relative', () => {
      mockViewContainerRef.createComponent.and.returnValue(<any>{
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('div'),
        },
      });

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);

      const preElements = hostElement.querySelectorAll('pre');
      preElements.forEach((pre: HTMLPreElement) => {
        expect(pre.style.position).toBe('relative');
      });
    });
  });

  describe('cleanup', () => {
    it('should destroy all button references', () => {
      const mockButtonRef = {
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('div'),
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
