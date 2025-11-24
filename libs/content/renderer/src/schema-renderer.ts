import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  ElementRef,
  ViewRef,
  createComponent,
  EnvironmentInjector,
  ApplicationRef,
  input,
  untracked,
  inputBinding,
  Type,
} from '@angular/core';

import {
  DaffContentSchema,
  _DAFF_CONTENT_COMPONENT_MAP,
  DaffStyleInjector,
  generateClassName,
  generateCSS,
} from '@daffodil/content';


/**
 * Renders a `DaffContentSchema` of hierarchical components, elements, & text.
 *
 * @example
 * ```ts
 * @Component({
 *   selector: 'my-page',
 *   imports: [DaffContentSchemaRenderer],
 *   template: `<daff-schema-renderer [schema]="pageSchema" />`
 * })
 * export class MyPageComponent {
 *   pageSchema: DaffContentSchema = {
 *     type: 'elementSchema',
 *     element: 'div',
 *     children: [
 *       { type: 'textSchema', text: 'Hello, world!' },
 *     ]
 *   };
 * }
 * ```
 *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 *
 */
@Component({
  selector: 'daff-schema-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  imports: [],
})
export class DaffContentSchemaRenderer {
  /**
   * The content schema to render.
   * Can be an element, component, or text schema node.
   */
  readonly schema = input<DaffContentSchema>();

  /** @docs-private */
  private componentMap = inject(_DAFF_CONTENT_COMPONENT_MAP);
  /** @docs-private */
  private styleInjector = inject(DaffStyleInjector);
  /** @docs-private */
  private document = inject(DOCUMENT);
  /** @docs-private */
  private readonly injector = inject(EnvironmentInjector);
  /** @docs-private */
  private readonly appRef = inject(ApplicationRef);
  /** @docs-private */
  private readonly host = <HTMLElement>inject(ElementRef).nativeElement;

  constructor() {
    // Effect that watches schema() and renders it.
    effect((onCleanup) => {
      const schema = this.schema();

      const views: ViewRef[] = [];
      const cssStrings: string[] = [];
      // Actually render the schema to an element. We do this in untracked() to avoid accidental
      // reactive dependencies (even though there shouldn't be any).
      const node = untracked(() => this.render(schema, views, cssStrings));

      // Inject styles right before appending to DOM
      // Concatenate all CSS into a single style tag
      const styleTag = cssStrings.length > 0
        ? this.styleInjector.inject(cssStrings.join('\n'))
        : null;

      this.host.appendChild(node);

      onCleanup(() => {
        // When schema changes, remove the old node and destroy all associated views.
        node.remove();
        for (const view of views) {
          view.destroy();
        }
        // Remove injected style tag
        if (styleTag) {
          this.styleInjector.destroy(styleTag);
        }
      });
    });
  }

  /**
   * Recursively renders a schema node into DOM nodes.
   *
   * Handles three schema types:
   * - `componentSchema`: Dynamically creates Angular components with input bindings and content projection
   * - `elementSchema`: Creates HTML elements with attributes and dynamic styles
   * - `textSchema`: Creates text nodes
   *
   * @docs-private
   * @param schema - The schema node to render.
   * @param views - An array to collect created component views for cleanup.
   * @param cssStrings - An array to collect CSS strings for style injection.
   * @returns The rendered DOM node.
   */
  private render(schema: DaffContentSchema, views: ViewRef[], cssStrings: string[]): ChildNode {
    if (!schema) {
      return this.document.createElement('br');
    }

    switch (schema.type) {
      case 'componentSchema': {
        // Dynamically instantiate the component.
        const component = this.getComponentType(schema.name);
        if (component) {
          // Render children first for content projection
          const projectableNodes: Node[][] = [];
          if (schema.children) {
            const childNodes = schema.children.map(child => this.render(child, views, cssStrings));
            projectableNodes.push(childNodes);
          }

          const cmp = createComponent(component, {
            environmentInjector: this.injector,
            // Bind any inputs requested.
            bindings: Object.keys(schema.inputs ?? {}).map((key) =>
              inputBinding(key, () => schema.inputs[key]),
            ),
            // Pass children as projectable nodes for ng-content
            projectableNodes: projectableNodes.length > 0 ? projectableNodes : undefined,
          });

          // Attach to change detection and save the view for later cleanup.
          this.appRef.attachView(cmp.hostView);
          views.push(cmp.hostView);

          // Hack to remove ng-version attribute which gets added to AppRef level views automatically.
          cmp.location.nativeElement.removeAttribute('ng-version');

          return cmp.location.nativeElement;
        }
        return this.document.createElement('br');
      }
      case 'elementSchema': {
        if (!schema.element || schema.element === '') {
          return this.document.createElement('br');
        }

        // Only allow specific HTML elements
        const allowedElements = ['div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li'];
        if (!allowedElements.includes(schema.element)) {
          return this.document.createElement('br');
        }

        // Render an element dynamically.
        const element = this.document.createElement(schema.element);

        // Handle dynamic styles if present
        if (schema.styles) {
          const className = generateClassName();
          const css = generateCSS(className, schema.styles);
          cssStrings.push(css);
          element.classList.add(className);
        }

        // Set any attributes requested.
        for (const key of Object.keys(schema.attributes ?? {})) {
          element.setAttribute(key, schema.attributes[key]);
        }

        // Force target="_blank" on all anchor tags
        if (schema.element === 'a') {
          element.setAttribute('target', '_blank');
          element.setAttribute('rel', 'noopener noreferrer');
        }

        if (schema.children) {
          // Render & append children.
          element.append(
            ...schema.children.map((child) => this.render(child, views, cssStrings)),
          );
        }
        return element;
      }
      case 'textSchema': {
        return this.document.createTextNode(schema.text);
      }
      default:
        return this.document.createElement('br');
    }
  }

  /**
   * Retrieves the component type from the component map by name.
   *
   * @docs-private
   * @param name - The registered name of the component.
   * @returns The component type if found, or null if not registered.
   */
  private getComponentType(name: string): Type<any> | null {
    return this.componentMap[<keyof typeof this.componentMap>name] || null;
  }
}
