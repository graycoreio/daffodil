import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffDocsCodeBlockCopyButtonService } from './copy-code-block.service';

describe('@daffodil/docs | DaffDocsCodeBlockCopyButtonService', () => {
  let service: DaffDocsCodeBlockCopyButtonService;
  let mockViewContainerRef: jasmine.SpyObj<ViewContainerRef>;
  let hostElement: HTMLElement;

  beforeEach(() => {
    mockViewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['createComponent']);

    TestBed.configureTestingModule({
      providers: [DaffDocsCodeBlockCopyButtonService],
    });

    service = TestBed.inject(DaffDocsCodeBlockCopyButtonService);

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

    it('should create wrapper and append button to it', () => {
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

      const directChildren = Array.from(hostElement.children);
      expect(directChildren.length).toBe(2);
      expect(directChildren[0].tagName).toBe('DIV');
      expect(directChildren[1].tagName).toBe('DIV');

      expect(directChildren[0].querySelector('pre')).toBeTruthy();
      expect(directChildren[0].querySelector('button')).toBeTruthy();
      expect(directChildren[1].querySelector('pre')).toBeTruthy();
      expect(directChildren[1].querySelector('button')).toBeTruthy();
    });

    it('should skip pre elements without code', () => {
      hostElement.innerHTML = '<pre></pre>';

      service.addCopyButtonsToCodeBlocks(hostElement, mockViewContainerRef);

      expect(mockViewContainerRef.createComponent).not.toHaveBeenCalled();
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
