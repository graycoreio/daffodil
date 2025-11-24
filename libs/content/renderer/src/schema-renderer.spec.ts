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

import { DaffContentSchemaRenderer } from './schema-renderer';

@Component({
  selector: 'test-component',
  template: '<div class="test-component-content"><ng-content></ng-content></div>',
  standalone: true,
})
class TestComponent {
  readonly testInput = input<string>();
}

@Component({
  selector: 'test-component-with-input',
  template: '<div class="input-value">{{ testInput() }}</div>',
  standalone: true,
})
class TestComponentWithInput {
  readonly testInput = input<string>();
}

describe('@daffodil/content/renderer | DaffContentSchemaRenderer', () => {
  let component: DaffContentSchemaRenderer;
  let fixture: ComponentFixture<DaffContentSchemaRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffContentSchemaRenderer],
      providers: [
        provideDynamicComponent([
          {
            componentType: TestComponent,
            name: 'TestComponent',
          },
          {
            componentType: TestComponentWithInput,
            name: 'TestComponentWithInput',
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DaffContentSchemaRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
    it('should render a text node', fakeAsync(() => {
      const textSchema: DaffTextSchema = {
        type: 'textSchema',
        text: 'Hello World',
      };

      fixture.componentRef.setInput('schema', textSchema);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.textContent).toContain('Hello World');
    }));
  });

  describe('with elementSchema', () => {
    it('should render allowed elements', fakeAsync(() => {
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

    it('should render a br element for disallowed elements', fakeAsync(() => {
      const elementSchema: DaffContentElementSchema = {
        type: 'elementSchema',
        element: 'script',
      };

      fixture.componentRef.setInput('schema', elementSchema);
      fixture.detectChanges();
      tick();

      const script = fixture.nativeElement.querySelector('script');
      expect(script).toBeFalsy();

      const br = fixture.nativeElement.querySelector('br');
      expect(br).toBeTruthy();
    }));

    it('should render br for anchor elements (not allowed)', fakeAsync(() => {
      const elementSchema: DaffContentElementSchema = {
        type: 'elementSchema',
        element: 'a',
        attributes: {
          href: 'https://example.com',
        },
      };

      fixture.componentRef.setInput('schema', elementSchema);
      fixture.detectChanges();
      tick();

      const anchor = fixture.nativeElement.querySelector('a');
      expect(anchor).toBeFalsy();

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

    describe('allowed elements', () => {
      const allowedElements = ['div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li'];

      allowedElements.forEach(element => {
        it(`should render ${element} element`, fakeAsync(() => {
          const elementSchema: DaffContentElementSchema = {
            type: 'elementSchema',
            element,
          };

          fixture.componentRef.setInput('schema', elementSchema);
          fixture.detectChanges();
          tick();

          const el = fixture.nativeElement.querySelector(element);
          expect(el).toBeTruthy();
        }));
      });
    });
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

    it('should pass inputs to the component', fakeAsync(() => {
      const componentSchema: DaffContentComponentSchema = {
        type: 'componentSchema',
        name: 'TestComponentWithInput',
        inputs: {
          testInput: 'Hello from input',
        },
      };

      fixture.componentRef.setInput('schema', componentSchema);
      fixture.detectChanges();
      tick();

      const inputValue = fixture.nativeElement.querySelector('.input-value');
      expect(inputValue.textContent).toContain('Hello from input');
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

  describe('nested schemas', () => {
    it('should render deeply nested structures', fakeAsync(() => {
      const nestedSchema: DaffContentElementSchema = {
        type: 'elementSchema',
        element: 'div',
        attributes: { class: 'level-1' },
        children: [
          {
            type: 'elementSchema',
            element: 'div',
            attributes: { class: 'level-2' },
            children: [
              {
                type: 'elementSchema',
                element: 'p',
                attributes: { class: 'level-3' },
                children: [
                  { type: 'textSchema', text: 'Deep nested text' },
                ],
              },
            ],
          },
        ],
      };

      fixture.componentRef.setInput('schema', nestedSchema);
      fixture.detectChanges();
      tick();

      const level1 = fixture.nativeElement.querySelector('.level-1');
      const level2 = fixture.nativeElement.querySelector('.level-2');
      const level3 = fixture.nativeElement.querySelector('.level-3');

      expect(level1).toBeTruthy();
      expect(level2).toBeTruthy();
      expect(level3).toBeTruthy();
      expect(level3.textContent).toContain('Deep nested text');
    }));

    it('should render mixed element and component schemas', fakeAsync(() => {
      const mixedSchema: DaffContentElementSchema = {
        type: 'elementSchema',
        element: 'div',
        children: [
          { type: 'textSchema', text: 'Text before' },
          {
            type: 'componentSchema',
            name: 'TestComponent',
            inputs: {},
            children: [
              { type: 'textSchema', text: 'Inside component' },
            ],
          },
          { type: 'textSchema', text: 'Text after' },
        ],
      };

      fixture.componentRef.setInput('schema', mixedSchema);
      fixture.detectChanges();
      tick();

      const content = fixture.nativeElement.textContent;
      expect(content).toContain('Text before');
      expect(content).toContain('Inside component');
      expect(content).toContain('Text after');
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

      expect(fixture.nativeElement.textContent).toContain('First text');

      const textSchema2: DaffTextSchema = {
        type: 'textSchema',
        text: 'Second text',
      };

      fixture.componentRef.setInput('schema', textSchema2);
      fixture.detectChanges();
      tick();

      expect(fixture.nativeElement.textContent).toContain('Second text');
      expect(fixture.nativeElement.textContent).not.toContain('First text');
    }));
  });
});
