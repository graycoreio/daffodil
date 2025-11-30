import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DaffTextSchema } from '@daffodil/content';

import { DaffContentChatMessage } from './chat-message';
import { ChatSidebarComponent } from './chat-sidebar.component';

describe('@daffodil/content/editor | ChatSidebarComponent', () => {
  let component: ChatSidebarComponent;
  let fixture: ComponentFixture<ChatSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSidebarComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('inputs', () => {
    it('should have default chatHistory as empty array', () => {
      expect(component.chatHistory()).toEqual([]);
    });

    it('should have default isLoading as false', () => {
      expect(component.isLoading()).toBe(false);
    });

    it('should have default error as null', () => {
      expect(component.error()).toBeNull();
    });
  });

  describe('internal state', () => {
    it('should have default currentPrompt as empty string', () => {
      expect(component.currentPrompt()).toBe('');
    });
  });

  describe('chat history display', () => {
    it('should display user messages with user-message class', fakeAsync(() => {
      const chatHistory: DaffContentChatMessage[] = [
        { type: 'user', message: 'Hello' },
      ];

      fixture.componentRef.setInput('chatHistory', chatHistory);
      fixture.detectChanges();
      tick();

      const message = fixture.nativeElement.querySelector('.user-message');
      expect(message).toBeTruthy();
      expect(message.textContent).toContain('Hello');
    }));

    it('should display system messages with system-message class', fakeAsync(() => {
      const chatHistory: DaffContentChatMessage[] = [
        { type: 'system', message: 'System response' },
      ];

      fixture.componentRef.setInput('chatHistory', chatHistory);
      fixture.detectChanges();
      tick();

      const message = fixture.nativeElement.querySelector('.system-message');
      expect(message).toBeTruthy();
      expect(message.textContent).toContain('System response');
    }));

    it('should display multiple messages in order', fakeAsync(() => {
      const chatHistory: DaffContentChatMessage[] = [
        { type: 'user', message: 'First' },
        { type: 'system', message: 'Second' },
        { type: 'user', message: 'Third' },
      ];

      fixture.componentRef.setInput('chatHistory', chatHistory);
      fixture.detectChanges();
      tick();

      const messages = fixture.nativeElement.querySelectorAll('.chat-message');
      expect(messages.length).toBe(3);
    }));

    it('should display restore button for messages with schema', fakeAsync(() => {
      const schema: DaffTextSchema = { type: 'textSchema', text: 'Test' };
      const chatHistory: DaffContentChatMessage[] = [
        { type: 'system', message: 'Generated content', schema },
      ];

      fixture.componentRef.setInput('chatHistory', chatHistory);
      fixture.detectChanges();
      tick();

      const restoreButton = fixture.nativeElement.querySelector('.restore-button');
      expect(restoreButton).toBeTruthy();
    }));

    it('should not display restore button for messages without schema', fakeAsync(() => {
      const chatHistory: DaffContentChatMessage[] = [
        { type: 'user', message: 'Hello' },
      ];

      fixture.componentRef.setInput('chatHistory', chatHistory);
      fixture.detectChanges();
      tick();

      const restoreButton = fixture.nativeElement.querySelector('.restore-button');
      expect(restoreButton).toBeFalsy();
    }));
  });

  describe('loading state', () => {
    it('should display loading message when isLoading is true', fakeAsync(() => {
      fixture.componentRef.setInput('isLoading', true);
      fixture.detectChanges();
      tick();

      const loadingMessage = fixture.nativeElement.querySelector('.loading-message');
      expect(loadingMessage).toBeTruthy();
      expect(loadingMessage.textContent).toContain('Thinking...');
    }));

    it('should not display loading message when isLoading is false', () => {
      const loadingMessage = fixture.nativeElement.querySelector('.loading-message');
      expect(loadingMessage).toBeFalsy();
    });

    it('should display stop button when isLoading is true', fakeAsync(() => {
      fixture.componentRef.setInput('isLoading', true);
      fixture.detectChanges();
      tick();

      const stopButton = fixture.nativeElement.querySelector('.stop-button');
      expect(stopButton).toBeTruthy();
    }));

    it('should display submit button when isLoading is false', () => {
      const submitButton = fixture.nativeElement.querySelector('.submit-button');
      expect(submitButton).toBeTruthy();
    });
  });

  describe('error display', () => {
    it('should display error message when error is set', fakeAsync(() => {
      fixture.componentRef.setInput('error', 'Something went wrong');
      fixture.detectChanges();
      tick();

      const errorMessage = fixture.nativeElement.querySelector('.error-message');
      expect(errorMessage).toBeTruthy();
      expect(errorMessage.textContent).toContain('Something went wrong');
    }));

    it('should not display error message when error is null', () => {
      const errorMessage = fixture.nativeElement.querySelector('.error-message');
      expect(errorMessage).toBeFalsy();
    });
  });

  describe('onSubmitPrompt', () => {
    it('should emit promptSubmit with the current prompt text', () => {
      const promptSpy = spyOn(component.promptSubmit, 'emit');
      component.currentPrompt.set('Test prompt');

      component.onSubmitPrompt();

      expect(promptSpy).toHaveBeenCalledWith('Test prompt');
    });

    it('should clear the currentPrompt after submission', () => {
      spyOn(component.promptSubmit, 'emit');
      component.currentPrompt.set('Test prompt');

      component.onSubmitPrompt();

      expect(component.currentPrompt()).toBe('');
    });

    it('should not emit if currentPrompt is empty', () => {
      const promptSpy = spyOn(component.promptSubmit, 'emit');
      component.currentPrompt.set('');

      component.onSubmitPrompt();

      expect(promptSpy).not.toHaveBeenCalled();
    });

    it('should not emit if currentPrompt is only whitespace', () => {
      const promptSpy = spyOn(component.promptSubmit, 'emit');
      component.currentPrompt.set('   ');

      component.onSubmitPrompt();

      expect(promptSpy).not.toHaveBeenCalled();
    });

    it('should not emit if isLoading is true', fakeAsync(() => {
      fixture.componentRef.setInput('isLoading', true);
      fixture.detectChanges();
      tick();

      const promptSpy = spyOn(component.promptSubmit, 'emit');
      component.currentPrompt.set('Test prompt');

      component.onSubmitPrompt();

      expect(promptSpy).not.toHaveBeenCalled();
    }));

    it('should prevent default on keyboard event', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      const preventDefaultSpy = spyOn(event, 'preventDefault');
      component.currentPrompt.set('Test');

      component.onSubmitPrompt(event);

      expect(preventDefaultSpy).toHaveBeenCalledWith();
    });
  });

  describe('onStopGeneration', () => {
    it('should emit stopGeneration event', () => {
      const stopSpy = spyOn(component.stopGeneration, 'emit');

      component.onStopGeneration();

      expect(stopSpy).toHaveBeenCalledWith();
    });
  });

  describe('onRestoreSchema', () => {
    it('should emit schemaRestore with the provided schema', () => {
      const schema: DaffTextSchema = { type: 'textSchema', text: 'Restored' };
      const restoreSpy = spyOn(component.schemaRestore, 'emit');

      component.onRestoreSchema(schema);

      expect(restoreSpy).toHaveBeenCalledWith(schema);
    });
  });

  describe('submit button state', () => {
    it('should be disabled when currentPrompt is empty', fakeAsync(() => {
      component.currentPrompt.set('');
      fixture.detectChanges();
      tick();

      const submitButton = fixture.nativeElement.querySelector('.submit-button');
      expect(submitButton.disabled).toBe(true);
    }));

    it('should be enabled when currentPrompt has text', fakeAsync(() => {
      component.currentPrompt.set('Some text');
      fixture.detectChanges();
      tick();

      const submitButton = fixture.nativeElement.querySelector('.submit-button');
      expect(submitButton.disabled).toBe(false);
    }));
  });
});
