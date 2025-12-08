import { DOCUMENT } from '@angular/common';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { DaffContentSchema } from '@daffodil/content';

import { DaffIframeRenderer } from '../iframe-renderer.component';

describe('@daffodil/content/editor | DaffIframeRenderer | CSR mode', () => {
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
    fixture.componentRef.setInput('mode', 'csr');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render the form', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeFalsy();
  });

  it('should set iframe src to rendererUrl', () => {
    const iframe: HTMLIFrameElement = fixture.nativeElement.querySelector('iframe');
    expect(iframe.src).toContain('/test-renderer');
  });

  describe('iframe communication', () => {
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

    it('should send setSchema message when iframe signals ready', fakeAsync(() => {
      const schema: DaffContentSchema = { type: 'textSchema', text: 'Test' };
      fixture.componentRef.setInput('schema', schema);
      fixture.detectChanges();

      const readyMessage = new MessageEvent('message', {
        data: { type: 'ready' },
        origin: win.location.origin,
      });
      win.dispatchEvent(readyMessage);
      tick();

      expect(postMessageSpy).toHaveBeenCalledWith(
        { type: 'setSchema', schema },
        '*',
      );
    }));

    it('should send updated schema when schema input changes after iframe is ready', fakeAsync(() => {
      const initialSchema: DaffContentSchema = { type: 'textSchema', text: 'Initial' };
      fixture.componentRef.setInput('schema', initialSchema);
      fixture.detectChanges();

      const readyMessage = new MessageEvent('message', {
        data: { type: 'ready' },
        origin: win.location.origin,
      });
      win.dispatchEvent(readyMessage);
      tick();

      postMessageSpy.calls.reset();

      const updatedSchema: DaffContentSchema = { type: 'textSchema', text: 'Updated' };
      fixture.componentRef.setInput('schema', updatedSchema);
      fixture.detectChanges();
      tick();

      expect(postMessageSpy).toHaveBeenCalledWith(
        { type: 'setSchema', schema: updatedSchema },
        '*',
      );
    }));

    it('should emit schemaUpdate when receiving schemaUpdate message from iframe', fakeAsync(() => {
      const schemaUpdateSpy = spyOn(component.schemaUpdate, 'emit');
      const updatedSchema: DaffContentSchema = { type: 'textSchema', text: 'From iframe' };

      const schemaUpdateMessage = new MessageEvent('message', {
        data: { type: 'schemaUpdate', schema: updatedSchema },
        origin: win.location.origin,
      });
      win.dispatchEvent(schemaUpdateMessage);
      tick();

      expect(schemaUpdateSpy).toHaveBeenCalledWith(updatedSchema);
    }));

    it('should ignore messages from invalid origins', fakeAsync(() => {
      const schemaUpdateSpy = spyOn(component.schemaUpdate, 'emit');

      const schemaUpdateMessage = new MessageEvent('message', {
        data: { type: 'schemaUpdate', schema: { type: 'textSchema', text: 'Malicious' }},
        origin: 'https://malicious-site.com',
      });
      win.dispatchEvent(schemaUpdateMessage);
      tick();

      expect(schemaUpdateSpy).not.toHaveBeenCalled();
    }));

    it('should ignore messages with invalid message format', fakeAsync(() => {
      const schemaUpdateSpy = spyOn(component.schemaUpdate, 'emit');

      const invalidMessage = new MessageEvent('message', {
        data: { type: 'unknownType' },
        origin: win.location.origin,
      });
      win.dispatchEvent(invalidMessage);
      tick();

      expect(schemaUpdateSpy).not.toHaveBeenCalled();
    }));
  });
});
