import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffArticleHeadingLinkService } from './heading-link.service';

describe('DaffArticleHeadingLinkService', () => {
  let service: DaffArticleHeadingLinkService;
  let mockViewContainerRef: jasmine.SpyObj<ViewContainerRef>;
  let hostElement: HTMLElement;

  beforeEach(() => {
    mockViewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['createComponent']);

    TestBed.configureTestingModule({
      providers: [DaffArticleHeadingLinkService],
    });

    service = TestBed.inject(DaffArticleHeadingLinkService);

    hostElement = document.createElement('div');
    hostElement.innerHTML = `
      <h2>First Heading</h2>
      <h3>Second Heading</h3>
      <h4>Third Heading</h4>
    `;
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('addLinksToHeadings', () => {
    it('should find all h2, h3, and h4 elements', () => {
      const createComponentSpy = mockViewContainerRef.createComponent.and.returnValue(<any>{
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('daff-article-heading-link'),
        },
      });

      service.addLinksToHeadings(hostElement, mockViewContainerRef);

      expect(createComponentSpy).toHaveBeenCalledTimes(3);
    });

    it('should generate fragment from heading text and set inputs', () => {
      const setInputSpy = jasmine.createSpy('setInput');
      mockViewContainerRef.createComponent.and.returnValue(<any>{
        setInput: setInputSpy,
        location: {
          nativeElement: document.createElement('daff-article-heading-link'),
        },
      });

      service.addLinksToHeadings(hostElement, mockViewContainerRef);

      expect(setInputSpy).toHaveBeenCalledWith('fragment', 'first-heading');
      expect(setInputSpy).toHaveBeenCalledWith('label', 'First Heading');
    });

    it('should set id on heading if it does not have one', () => {
      mockViewContainerRef.createComponent.and.returnValue(<any>{
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('daff-article-heading-link'),
        },
      });

      service.addLinksToHeadings(hostElement, mockViewContainerRef);

      const h2 = hostElement.querySelector('h2');
      expect(h2.id).toBe('first-heading');
    });

    it('should use existing id if heading already has one', () => {
      hostElement.innerHTML = '<h2 id="custom-id">Heading</h2>';
      const setInputSpy = jasmine.createSpy('setInput');
      mockViewContainerRef.createComponent.and.returnValue(<any>{
        setInput: setInputSpy,
        location: {
          nativeElement: document.createElement('daff-article-heading-link'),
        },
      });

      service.addLinksToHeadings(hostElement, mockViewContainerRef);

      expect(setInputSpy).toHaveBeenCalledWith('fragment', 'custom-id');
    });

    it('should wrap heading content with link component', () => {
      mockViewContainerRef.createComponent.and.callFake(() => {
        const linkElement = document.createElement('daff-article-heading-link');
        const setInputSpy = jasmine.createSpy('setInput');
        return <any>{
          setInput: setInputSpy,
          location: {
            nativeElement: linkElement,
          },
        };
      });

      service.addLinksToHeadings(hostElement, mockViewContainerRef);

      const headings = hostElement.querySelectorAll('h2, h3, h4');
      expect(headings.length).toBe(3);

      headings.forEach((heading, index) => {
        expect(heading.children.length).toBe(1);
        expect(heading.firstElementChild.tagName.toLowerCase()).toBe('daff-article-heading-link');
      });
    });

    it('should skip headings that already have a heading link component', () => {
      const existingLink = document.createElement('daff-article-heading-link');
      const h2 = hostElement.querySelector('h2');
      h2.appendChild(existingLink);

      mockViewContainerRef.createComponent.and.returnValue(<any>{
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('daff-article-heading-link'),
        },
      });

      service.addLinksToHeadings(hostElement, mockViewContainerRef);

      expect(mockViewContainerRef.createComponent).toHaveBeenCalledTimes(2);
    });

    it('should skip headings inside article-encapsulated elements', () => {
      hostElement.innerHTML = `
        <h2>Should get link</h2>
        <div class="daff-ae">
          <h3>Should be skipped</h3>
          <div>
            <h4>Should be skipped</h4>
          </div>
        </div>
        <h2>Should also get link</h2>
      `;

      mockViewContainerRef.createComponent.and.returnValue(<any>{
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('daff-article-heading-link'),
        },
      });

      service.addLinksToHeadings(hostElement, mockViewContainerRef);
      expect(mockViewContainerRef.createComponent).toHaveBeenCalledTimes(2);
    });
  });

  describe('cleanup', () => {
    it('should destroy all link references and clear the links array', () => {
      const mockLinkRef = {
        setInput: jasmine.createSpy('setInput'),
        location: {
          nativeElement: document.createElement('daff-article-heading-link'),
        },
        destroy: jasmine.createSpy('destroy'),
      };

      mockViewContainerRef.createComponent.and.returnValue(<any>mockLinkRef);

      service.addLinksToHeadings(hostElement, mockViewContainerRef);
      service.cleanup();

      expect(mockLinkRef.destroy).toHaveBeenCalledTimes(3);
      expect(service['links'].length).toBe(0);
    });
  });
});
