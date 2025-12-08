import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import {
  DaffContentSchema,
  DaffTextSchema,
} from '@daffodil/content';

import { DaffAiEditorComponent } from './ai-editor.component';
import { DaffContentChatMessage } from './chat-sidebar/chat-message';

describe('@daffodil/content/editor | DaffAiEditorComponent', () => {
  let component: DaffAiEditorComponent;
  let fixture: ComponentFixture<DaffAiEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffAiEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DaffAiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('inputs', () => {
    it('should have default fullscreen as false', () => {
      expect(component.fullscreen()).toBe(false);
    });

    it('should have default chatHistory as empty array', () => {
      expect(component.chatHistory()).toEqual([]);
    });

    it('should have default error as null', () => {
      expect(component.error()).toBeNull();
    });

    it('should have default isGenerating as false', () => {
      expect(component.isGenerating()).toBe(false);
    });

    it('should have default schema as undefined', () => {
      expect(component.schema()).toBeUndefined();
    });
  });

  describe('internal state', () => {
    it('should have default activeTab as interact', () => {
      expect(component.activeTab()).toBe('interact');
    });

    it('should have default viewportMode as desktop', () => {
      expect(component.viewportMode()).toBe('desktop');
    });

    it('should have default sidebarVisible as true', () => {
      expect(component.sidebarVisible()).toBe(true);
    });

    it('should have default optimisticMessages as empty array', () => {
      expect(component.optimisticMessages()).toEqual([]);
    });
  });

  describe('fullscreenClass', () => {
    it('should return false when fullscreen is false', () => {
      expect(component.fullscreenClass).toBe(false);
    });

    it('should return true when fullscreen is true', fakeAsync(() => {
      fixture.componentRef.setInput('fullscreen', true);
      fixture.detectChanges();
      tick();

      expect(component.fullscreenClass).toBe(true);
    }));
  });

  describe('displayChatHistory', () => {
    it('should combine chatHistory and optimisticMessages', fakeAsync(() => {
      const chatHistory: DaffContentChatMessage[] = [
        { type: 'user', message: 'Hello' },
        { type: 'system', message: 'Hi there!' },
      ];

      fixture.componentRef.setInput('chatHistory', chatHistory);
      fixture.detectChanges();
      tick();

      component.optimisticMessages.set([
        { type: 'user', message: 'New message' },
      ]);

      expect(component.displayChatHistory()).toEqual([
        { type: 'user', message: 'Hello' },
        { type: 'system', message: 'Hi there!' },
        { type: 'user', message: 'New message' },
      ]);
    }));
  });

  describe('onPromptSubmit', () => {
    it('should add optimistic message', () => {
      component.onPromptSubmit('Test prompt');

      expect(component.optimisticMessages()).toEqual([
        { type: 'user', message: 'Test prompt' },
      ]);
    });

    it('should emit prompt event with correct data', fakeAsync(() => {
      const schema: DaffTextSchema = { type: 'textSchema', text: 'Test' };
      const chatHistory: DaffContentChatMessage[] = [
        { type: 'user', message: 'Previous message' },
      ];

      fixture.componentRef.setInput('schema', schema);
      fixture.componentRef.setInput('chatHistory', chatHistory);
      fixture.detectChanges();
      tick();

      const promptSpy = spyOn(component.prompt, 'emit');

      component.onPromptSubmit('New prompt');

      expect(promptSpy).toHaveBeenCalledWith({
        prompt: 'New prompt',
        chatHistory,
        schema,
      });
    }));
  });

  describe('onStopGeneration', () => {
    it('should emit stopGeneration event', () => {
      const stopSpy = spyOn(component.stopGeneration, 'emit');

      component.onStopGeneration();

      expect(stopSpy).toHaveBeenCalledWith();
    });
  });

  describe('onSchemaUpdate', () => {
    it('should emit schemaUpdate event with the updated schema', () => {
      const updatedSchema: DaffContentSchema = {
        type: 'textSchema',
        text: 'Updated text',
      };
      const schemaUpdateSpy = spyOn(component.schemaUpdate, 'emit');

      component.onSchemaUpdate(updatedSchema);

      expect(schemaUpdateSpy).toHaveBeenCalledWith(updatedSchema);
    });
  });

  describe('onSchemaRestore', () => {
    it('should emit schemaUpdate event with the restored schema', () => {
      const restoredSchema: DaffContentSchema = {
        type: 'textSchema',
        text: 'Restored text',
      };
      const schemaUpdateSpy = spyOn(component.schemaUpdate, 'emit');

      component.onSchemaRestore(restoredSchema);

      expect(schemaUpdateSpy).toHaveBeenCalledWith(restoredSchema);
    });
  });

  describe('setActiveTab', () => {
    it('should set activeTab to interact', () => {
      component.setActiveTab('interact');
      expect(component.activeTab()).toBe('interact');
    });

    it('should set activeTab to schema', () => {
      component.setActiveTab('schema');
      expect(component.activeTab()).toBe('schema');
    });

    it('should set activeTab to components', () => {
      component.setActiveTab('components');
      expect(component.activeTab()).toBe('components');
    });
  });

  describe('setViewportMode', () => {
    it('should set viewportMode to desktop', () => {
      component.setViewportMode('desktop');
      expect(component.viewportMode()).toBe('desktop');
    });

    it('should set viewportMode to tablet', () => {
      component.setViewportMode('tablet');
      expect(component.viewportMode()).toBe('tablet');
    });

    it('should set viewportMode to mobile', () => {
      component.setViewportMode('mobile');
      expect(component.viewportMode()).toBe('mobile');
    });
  });

  describe('toggleFullscreen', () => {
    it('should emit fullscreenChange with true when fullscreen is false', () => {
      const fullscreenChangeSpy = spyOn(component.fullscreenChange, 'emit');

      component.toggleFullscreen();

      expect(fullscreenChangeSpy).toHaveBeenCalledWith(true);
    });

    it('should emit fullscreenChange with false when fullscreen is true', fakeAsync(() => {
      fixture.componentRef.setInput('fullscreen', true);
      fixture.detectChanges();
      tick();

      const fullscreenChangeSpy = spyOn(component.fullscreenChange, 'emit');

      component.toggleFullscreen();

      expect(fullscreenChangeSpy).toHaveBeenCalledWith(false);
    }));
  });

  describe('toggleSidebar', () => {
    it('should toggle sidebarVisible from true to false', () => {
      expect(component.sidebarVisible()).toBe(true);

      component.toggleSidebar();

      expect(component.sidebarVisible()).toBe(false);
    });

    it('should toggle sidebarVisible from false to true', () => {
      component.sidebarVisible.set(false);

      component.toggleSidebar();

      expect(component.sidebarVisible()).toBe(true);
    });
  });

  describe('optimistic messages cleanup', () => {
    it('should clear optimistic messages when chatHistory changes', fakeAsync(() => {
      component.optimisticMessages.set([
        { type: 'user', message: 'Optimistic message' },
      ]);

      expect(component.optimisticMessages().length).toBe(1);

      fixture.componentRef.setInput('chatHistory', [
        { type: 'user', message: 'Optimistic message' },
        { type: 'system', message: 'Response' },
      ]);
      fixture.detectChanges();
      tick();

      expect(component.optimisticMessages()).toEqual([]);
    }));
  });

  describe('renderer selection', () => {
    it('should show empty state when neither rendererConfig nor schema is provided', () => {
      fixture.detectChanges();

      const iframeRenderer = fixture.nativeElement.querySelector('daff-iframe-renderer');
      const editableRenderer = fixture.nativeElement.querySelector('daff-content-editable-renderer');
      const emptyState = fixture.nativeElement.querySelector('.empty-state');

      expect(iframeRenderer).toBeFalsy();
      expect(editableRenderer).toBeFalsy();
      expect(emptyState).toBeTruthy();
    });

    it('should show editable renderer when schema is provided but rendererConfig is not', fakeAsync(() => {
      const schema: DaffContentSchema = { type: 'textSchema', text: 'Test' };
      fixture.componentRef.setInput('schema', schema);
      fixture.detectChanges();

      const iframeRenderer = fixture.nativeElement.querySelector('daff-iframe-renderer');
      const editableRenderer = fixture.nativeElement.querySelector('daff-content-editable-renderer');
      const emptyState = fixture.nativeElement.querySelector('.empty-state');

      expect(iframeRenderer).toBeFalsy();
      expect(editableRenderer).toBeTruthy();
      expect(emptyState).toBeFalsy();
    }));

    it('should show empty state when rendererConfig is provided but schema is not', fakeAsync(() => {
      fixture.componentRef.setInput('rendererConfig', { url: '/test-renderer' });
      fixture.detectChanges();

      const iframeRenderer = fixture.nativeElement.querySelector('daff-iframe-renderer');
      const editableRenderer = fixture.nativeElement.querySelector('daff-content-editable-renderer');
      const emptyState = fixture.nativeElement.querySelector('.empty-state');

      expect(iframeRenderer).toBeFalsy();
      expect(editableRenderer).toBeFalsy();
      expect(emptyState).toBeTruthy();
    }));

    it('should prefer iframe renderer over editable renderer when both rendererConfig and schema are provided', fakeAsync(() => {
      const schema: DaffContentSchema = { type: 'textSchema', text: 'Test' };
      fixture.componentRef.setInput('rendererConfig', { url: '/test-renderer' });
      fixture.componentRef.setInput('schema', schema);
      fixture.detectChanges();

      const iframeRenderer = fixture.nativeElement.querySelector('daff-iframe-renderer');
      const editableRenderer = fixture.nativeElement.querySelector('daff-content-editable-renderer');

      expect(iframeRenderer).toBeTruthy();
      expect(editableRenderer).toBeFalsy();
    }));
  });
});
