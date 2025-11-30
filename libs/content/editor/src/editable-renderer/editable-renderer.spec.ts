import {
  Component,
  input,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import {
  DaffContentComponentSchema,
  DaffContentElementSchema,
  DaffTextSchema,
  provideDynamicComponent,
} from '@daffodil/content';

import { EditableRenderer } from './editable-renderer';

@Component({
  selector: 'test-component',
  template: '<div class="test-component"><ng-content></ng-content></div>',
  standalone: true,
})
class TestComponent {
  readonly testInput = input<string>();
}

describe('@daffodil/content/editor | EditableRenderer', () => {
  let component: EditableRenderer;
  let fixture: ComponentFixture<EditableRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableRenderer],
      providers: [
        provideDynamicComponent({
          componentType: TestComponent,
          name: 'TestComponent',
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditableRenderer);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('rendering', () => {
    describe('with undefined schema', () => {
      it('should render a br element', fakeAsync(() => {
        fixture.componentRef.setInput('schema', undefined);
        fixture.detectChanges();
        tick();

        const br = fixture.nativeElement.querySelector('br');
        expect(br).toBeTruthy();
      }));
    });

    describe('with textSchema', () => {
      let textSchema: DaffTextSchema;

      beforeEach(() => {
        textSchema = {
          type: 'textSchema',
          text: 'Hello World',
        };
      });

      it('should render a contenteditable span', fakeAsync(() => {
        fixture.componentRef.setInput('schema', textSchema);
        fixture.detectChanges();
        tick();

        const span = fixture.nativeElement.querySelector('span');
        expect(span).toBeTruthy();
        expect(span.contentEditable).toBe('true');
        expect(span.textContent).toBe('Hello World');
      }));

      it('should have inline-block display style', fakeAsync(() => {
        fixture.componentRef.setInput('schema', textSchema);
        fixture.detectChanges();
        tick();

        const span = fixture.nativeElement.querySelector('span');
        expect(span.style.display).toBe('inline-block');
      }));

      it('should have no outline style', fakeAsync(() => {
        fixture.componentRef.setInput('schema', textSchema);
        fixture.detectChanges();
        tick();

        const span = fixture.nativeElement.querySelector('span');
        expect(span.style.outline).toBe('none');
      }));

      it('should have minWidth of 1px', fakeAsync(() => {
        fixture.componentRef.setInput('schema', textSchema);
        fixture.detectChanges();
        tick();

        const span = fixture.nativeElement.querySelector('span');
        expect(span.style.minWidth).toBe('1px');
      }));
    });

    describe('with elementSchema', () => {
      it('should render the specified element', fakeAsync(() => {
        const elementSchema: DaffContentElementSchema = {
          type: 'elementSchema',
          element: 'div',
        };

        fixture.componentRef.setInput('schema', elementSchema);
        fixture.detectChanges();
        tick();

        const div = fixture.nativeElement.querySelector('div');
        expect(div).toBeTruthy();
      }));

      it('should apply attributes to the element', fakeAsync(() => {
        const elementSchema: DaffContentElementSchema = {
          type: 'elementSchema',
          element: 'div',
          attributes: {
            'data-test': 'value',
            id: 'test-id',
          },
        };

        fixture.componentRef.setInput('schema', elementSchema);
        fixture.detectChanges();
        tick();

        const div = fixture.nativeElement.querySelector('div');
        expect(div.getAttribute('data-test')).toBe('value');
        expect(div.getAttribute('id')).toBe('test-id');
      }));

      it('should render nested children', fakeAsync(() => {
        const elementSchema: DaffContentElementSchema = {
          type: 'elementSchema',
          element: 'div',
          children: [
            { type: 'textSchema', text: 'Child text' },
          ],
        };

        fixture.componentRef.setInput('schema', elementSchema);
        fixture.detectChanges();
        tick();

        const div = fixture.nativeElement.querySelector('div');
        expect(div.textContent).toContain('Child text');
      }));

      it('should render a br element when element is empty', fakeAsync(() => {
        const elementSchema: DaffContentElementSchema = {
          type: 'elementSchema',
          element: '',
        };

        fixture.componentRef.setInput('schema', elementSchema);
        fixture.detectChanges();
        tick();

        const br = fixture.nativeElement.querySelector('br');
        expect(br).toBeTruthy();
      }));

      it('should apply dynamic styles and add generated class', fakeAsync(() => {
        const elementSchema: DaffContentElementSchema = {
          type: 'elementSchema',
          element: 'div',
          styles: {
            base: {
              padding: 16,
            },
          },
        };

        fixture.componentRef.setInput('schema', elementSchema);
        fixture.detectChanges();
        tick();

        const div = fixture.nativeElement.querySelector('div');
        expect(div.classList.length).toBeGreaterThan(0);
      }));
    });

    describe('with componentSchema', () => {
      it('should render a registered component', fakeAsync(() => {
        const componentSchema: DaffContentComponentSchema = {
          type: 'componentSchema',
          name: 'TestComponent',
          inputs: {},
        };

        fixture.componentRef.setInput('schema', componentSchema);
        fixture.detectChanges();
        tick();

        const testComponent = fixture.nativeElement.querySelector('test-component');
        expect(testComponent).toBeTruthy();
      }));

      it('should render a br element for unregistered components', fakeAsync(() => {
        const componentSchema: DaffContentComponentSchema = {
          type: 'componentSchema',
          name: 'NonExistentComponent',
          inputs: {},
        };

        fixture.componentRef.setInput('schema', componentSchema);
        fixture.detectChanges();
        tick();

        const br = fixture.nativeElement.querySelector('br');
        expect(br).toBeTruthy();
      }));

      it('should project children into the component', fakeAsync(() => {
        const componentSchema: DaffContentComponentSchema = {
          type: 'componentSchema',
          name: 'TestComponent',
          inputs: {},
          children: [
            { type: 'textSchema', text: 'Projected content' },
          ],
        };

        fixture.componentRef.setInput('schema', componentSchema);
        fixture.detectChanges();
        tick();

        const testComponent = fixture.nativeElement.querySelector('test-component');
        expect(testComponent.textContent).toContain('Projected content');
      }));

      it('should remove ng-version attribute from rendered component', fakeAsync(() => {
        const componentSchema: DaffContentComponentSchema = {
          type: 'componentSchema',
          name: 'TestComponent',
          inputs: {},
        };

        fixture.componentRef.setInput('schema', componentSchema);
        fixture.detectChanges();
        tick();

        const testComponent = fixture.nativeElement.querySelector('test-component');
        expect(testComponent.hasAttribute('ng-version')).toBe(false);
      }));
    });
  });

  describe('text editing', () => {
    let textSchema: DaffTextSchema;
    let schemaUpdateSpy: jasmine.Spy;

    beforeEach(fakeAsync(() => {
      textSchema = {
        type: 'textSchema',
        text: 'Original text',
      };

      fixture.componentRef.setInput('schema', textSchema);
      fixture.detectChanges();
      tick();

      schemaUpdateSpy = spyOn(component.schemaUpdate, 'emit');
    }));

    it('should emit schemaUpdate when text changes on blur', fakeAsync(() => {
      const span = fixture.nativeElement.querySelector('span');
      span.textContent = 'New text';
      span.dispatchEvent(new Event('blur'));
      tick();

      expect(schemaUpdateSpy).toHaveBeenCalledWith({
        type: 'textSchema',
        text: 'New text',
      });
    }));

    it('should not emit schemaUpdate when text has not changed on blur', fakeAsync(() => {
      const span = fixture.nativeElement.querySelector('span');
      span.dispatchEvent(new Event('blur'));
      tick();

      expect(schemaUpdateSpy).not.toHaveBeenCalled();
    }));

    it('should blur on Enter key press', fakeAsync(() => {
      const span = fixture.nativeElement.querySelector('span');
      const blurSpy = spyOn(span, 'blur');

      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      span.dispatchEvent(event);
      tick();

      expect(blurSpy).toHaveBeenCalledWith();
    }));
  });

  describe('hover effects', () => {
    beforeEach(fakeAsync(() => {
      const textSchema: DaffTextSchema = {
        type: 'textSchema',
        text: 'Test text',
      };

      fixture.componentRef.setInput('schema', textSchema);
      fixture.detectChanges();
      tick();
    }));

    it('should add background color on mouseenter', fakeAsync(() => {
      const span = fixture.nativeElement.querySelector('span');
      span.dispatchEvent(new Event('mouseenter'));
      tick();

      expect(span.style.backgroundColor).toBe('rgba(100, 149, 237, 0.1)');
    }));

    it('should remove background color on mouseleave', fakeAsync(() => {
      const span = fixture.nativeElement.querySelector('span');
      span.dispatchEvent(new Event('mouseenter'));
      span.dispatchEvent(new Event('mouseleave'));
      tick();

      expect(span.style.backgroundColor).toBe('transparent');
    }));
  });

  describe('nested schema updates', () => {
    it('should emit updated schema with correct path for nested text', fakeAsync(() => {
      const nestedSchema: DaffContentElementSchema = {
        type: 'elementSchema',
        element: 'div',
        children: [
          {
            type: 'elementSchema',
            element: 'p',
            children: [
              { type: 'textSchema', text: 'Nested text' },
            ],
          },
        ],
      };

      fixture.componentRef.setInput('schema', nestedSchema);
      fixture.detectChanges();
      tick();

      const schemaUpdateSpy = spyOn(component.schemaUpdate, 'emit');

      const span = fixture.nativeElement.querySelector('span');
      span.textContent = 'Updated nested text';
      span.dispatchEvent(new Event('blur'));
      tick();

      const emittedSchema = <DaffContentElementSchema>schemaUpdateSpy.calls.mostRecent().args[0];
      expect(emittedSchema.type).toBe('elementSchema');
      expect((<DaffContentElementSchema>emittedSchema.children[0]).children[0]).toEqual({
        type: 'textSchema',
        text: 'Updated nested text',
      });
    }));
  });

  describe('cleanup', () => {
    it('should clean up DOM nodes when schema changes', fakeAsync(() => {
      const textSchema1: DaffTextSchema = {
        type: 'textSchema',
        text: 'First text',
      };

      fixture.componentRef.setInput('schema', textSchema1);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.querySelector('span').textContent).toBe('First text');

      const textSchema2: DaffTextSchema = {
        type: 'textSchema',
        text: 'Second text',
      };

      fixture.componentRef.setInput('schema', textSchema2);
      fixture.detectChanges();
      tick();

      const spans = fixture.nativeElement.querySelectorAll('span');
      expect(spans.length).toBe(1);
      expect(spans[0].textContent).toBe('Second text');
    }));
  });
});
