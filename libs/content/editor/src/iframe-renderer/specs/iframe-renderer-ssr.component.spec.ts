import { DOCUMENT } from '@angular/common';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffContentSchema } from '@daffodil/content';

import { DaffIframeRenderer } from '../iframe-renderer.component';

describe('@daffodil/content/editor | DaffIframeRenderer | SSR mode', () => {
  let component: DaffIframeRenderer;
  let fixture: ComponentFixture<DaffIframeRenderer>;
  let doc: Document;
  let win: Window;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffIframeRenderer],
    }).compileComponents();

    doc = TestBed.inject(DOCUMENT);
    win = doc.defaultView;

    fixture = TestBed.createComponent(DaffIframeRenderer);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('rendererUrl', '/test-renderer');
    fixture.componentRef.setInput('mode', 'ssr');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have matching iframe name and form target', () => {
    const iframe = fixture.nativeElement.querySelector('iframe');
    const form = fixture.nativeElement.querySelector('form');

    expect(iframe.name).toBeTruthy();
    expect(iframe.name).toEqual(form.target);
  });

  it('should set iframe src to about:blank', () => {
    const iframe: HTMLIFrameElement = fixture.nativeElement.querySelector('iframe');
    expect(iframe.src).toContain('about:blank');
  });

  it('should set form action to rendererUrl', () => {
    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');
    expect(form.action).toContain('/test-renderer');
  });

  it('should set form method to POST', () => {
    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');
    expect(form.method.toUpperCase()).toBe('POST');
  });

  describe('formFields', () => {
    it('should render hidden inputs for each form field', () => {
      fixture.componentRef.setInput('formFields', {
        foo: 'bar',
        baz: 'qux',
      });
      fixture.detectChanges();

      const inputs = fixture.nativeElement.querySelectorAll('form input[type="hidden"]');
      expect(inputs.length).toBe(3); // schema + 2 form fields
    });

    it('should set input name and value from formFields', () => {
      fixture.componentRef.setInput('formFields', {
        customField: 'customValue',
      });
      fixture.detectChanges();

      const input: HTMLInputElement = fixture.nativeElement.querySelector('form input[name="customField"]');
      expect(input).toBeTruthy();
      expect(input.value).toBe('customValue');
    });
  });

  describe('form submission', () => {
    let form: HTMLFormElement;
    let formSubmitSpy: jasmine.Spy;

    const triggerIframeLoad = () => {
      const iframeDebugEl = fixture.debugElement.query(By.css('iframe'));
      iframeDebugEl.triggerEventHandler('load');
    };

    beforeEach(() => {
      form = fixture.nativeElement.querySelector('form');
      formSubmitSpy = spyOn(form, 'submit');
    });

    it('should submit the form when iframe loads', fakeAsync(() => {
      const schema: DaffContentSchema = { type: 'textSchema', text: 'Test' };
      fixture.componentRef.setInput('schema', schema);
      fixture.detectChanges();

      triggerIframeLoad();
      fixture.detectChanges();
      tick();

      expect(formSubmitSpy).toHaveBeenCalledWith();
    }));

    it('should set schema input value before submitting', fakeAsync(() => {
      const schema: DaffContentSchema = { type: 'textSchema', text: 'Test' };
      fixture.componentRef.setInput('schema', schema);
      triggerIframeLoad();

      fixture.detectChanges();
      tick();

      const schemaInput: HTMLInputElement = fixture.nativeElement.querySelector('form input[name="schema"]');
      expect(schemaInput.value).toBe(JSON.stringify(schema));
    }));

    it('should submit the form again when schema changes', fakeAsync(() => {
      const initialSchema: DaffContentSchema = { type: 'textSchema', text: 'Initial' };
      fixture.componentRef.setInput('schema', initialSchema);
      triggerIframeLoad();
      fixture.detectChanges();
      tick();

      formSubmitSpy.calls.reset();

      const updatedSchema: DaffContentSchema = { type: 'textSchema', text: 'Updated' };
      fixture.componentRef.setInput('schema', updatedSchema);
      fixture.detectChanges();
      tick();

      expect(formSubmitSpy).toHaveBeenCalledWith();
    }));
  });

  describe('message handling', () => {
    let iframe: HTMLIFrameElement;
    let postMessageSpy: jasmine.Spy;

    beforeEach(() => {
      iframe = fixture.nativeElement.querySelector('iframe');
      postMessageSpy = jasmine.createSpy('postMessage');

      Object.defineProperty(iframe, 'contentWindow', {
        value: { postMessage: postMessageSpy },
        writable: true,
      });
    });

    it('should not send postMessage when receiving ready message', fakeAsync(() => {
      const schema: DaffContentSchema = { type: 'textSchema', text: 'Test' };
      fixture.componentRef.setInput('schema', schema);
      fixture.detectChanges();

      const readyMessage = new MessageEvent('message', {
        data: { type: 'ready' },
        origin: win.location.origin,
      });
      win.dispatchEvent(readyMessage);
      tick();

      expect(postMessageSpy).not.toHaveBeenCalled();
    }));

    it('should not emit schemaUpdate when receiving schemaUpdate message', fakeAsync(() => {
      const schemaUpdateSpy = spyOn(component.schemaUpdate, 'emit');
      const updatedSchema: DaffContentSchema = { type: 'textSchema', text: 'From iframe' };

      const schemaUpdateMessage = new MessageEvent('message', {
        data: { type: 'schemaUpdate', schema: updatedSchema },
        origin: win.location.origin,
      });
      win.dispatchEvent(schemaUpdateMessage);
      tick();

      expect(schemaUpdateSpy).not.toHaveBeenCalled();
    }));

    it('should not send postMessage when schema changes', fakeAsync(() => {
      const initialSchema: DaffContentSchema = { type: 'textSchema', text: 'Initial' };
      fixture.componentRef.setInput('schema', initialSchema);
      fixture.detectChanges();
      tick();

      postMessageSpy.calls.reset();

      const updatedSchema: DaffContentSchema = { type: 'textSchema', text: 'Updated' };
      fixture.componentRef.setInput('schema', updatedSchema);
      fixture.detectChanges();
      tick();

      expect(postMessageSpy).not.toHaveBeenCalled();
    }));
  });
});
