import { DOCUMENT } from '@angular/common';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffDocsCopyButtonComponent } from './copy-button/copy-button.component';

describe('@daffodil/docs | DaffDocsCopyButtonComponent', () => {
  let component: DaffDocsCopyButtonComponent;
  let fixture: ComponentFixture<DaffDocsCopyButtonComponent>;
  let button: HTMLButtonElement;
  let mockDocument: Document;
  let writeTextSpy: jasmine.Spy;

  beforeEach(async () => {
    writeTextSpy = jasmine.createSpy('writeText').and.resolveTo();
    mockDocument = <any>{
      defaultView: {
        navigator: {
          clipboard: {
            writeText: writeTextSpy,
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      imports: [DaffDocsCopyButtonComponent],
      providers: [
        { provide: DOCUMENT, useValue: mockDocument },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DaffDocsCopyButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('content', 'test content');
    fixture.detectChanges();
    button = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an aria-label for accessibility', () => {
    expect(button.getAttribute('aria-label')).toBe('Copy to clipboard');
  });

  it('should display copy icon by default', () => {
    const icon = fixture.debugElement.query(By.css('fa-icon'));
    expect(icon).toBeTruthy();
  });

  describe('when the button is clicked', () => {
    it('should copy content to clipboard', async () => {
      await component.copyToClipboard();
      expect(writeTextSpy).toHaveBeenCalledWith('test content');
    });

    it('should update copied state', fakeAsync(() => {
      component.copyToClipboard();
      tick();
      expect(component['copied']()).toBe(true);
    }));

    it('should reset copied state after 2 seconds', fakeAsync(() => {
      component.copyToClipboard();
      tick();
      expect(component['copied']()).toBe(true);

      tick(2000);
      expect(component['copied']()).toBe(false);
    }));

    it('should update aria-label when copied', fakeAsync(() => {
      component.copyToClipboard();
      tick();
      fixture.detectChanges();
      expect(button.getAttribute('aria-label')).toBe('Copied to clipboard');
    }));
  });

  describe('when copying fails', () => {
    let consoleErrorSpy: jasmine.Spy;

    beforeEach(() => {
      consoleErrorSpy = spyOn(console, 'error');
      writeTextSpy.and.rejectWith('error');
    });

    it('should log an error', async () => {
      await component.copyToClipboard();
      expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to copy text: ', 'error');
    });
  });
});
