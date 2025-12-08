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
  output,
} from '@angular/core';

import {
  DaffContentSchema,
  _DAFF_CONTENT_COMPONENT_MAP,
  DaffStyleInjector,
  generateClassName,
  generateCSS,
  DaffTextSchema,
} from '@daffodil/content';

/**
 * A component that renders a {@link DaffContentSchema} tree with inline-editable text nodes.
 *
 * This component recursively renders schema nodes (elements, components, and text)
 * and wraps text nodes in contenteditable spans, allowing users to directly edit
 * text content in the rendered output. When text is edited, the component emits
 * an updated schema via the `schemaUpdate` output.
 *
 * @example
 * ```html
 * <editable-renderer
 *   [schema]="pageSchema"
 *   (schemaUpdate)="onSchemaUpdate($event)">
 * </editable-renderer>
 * ```
 */
@Component({
  selector: 'daff-content-editable-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display:block;
      container-type: inline-size;
      width: 100%;
    }
  `],
  template: '',
  imports: [],
})
export class DaffContentEditableRenderer {
  /**
   * The content schema to render.
   * Can be an element, component, or text schema node.
   */
  readonly schema = input<DaffContentSchema>();

  /**
   * Emits the updated schema when a text node is edited.
   * The emitted schema is a deep clone of the original with the updated text value.
   */
  readonly schemaUpdate = output<DaffContentSchema>();

  private componentMap = inject(_DAFF_CONTENT_COMPONENT_MAP);
  private styleInjector = inject(DaffStyleInjector);
  private readonly injector = inject(EnvironmentInjector);
  private readonly appRef = inject(ApplicationRef);
  private readonly host = <HTMLElement>inject(ElementRef).nativeElement;
  private readonly document = inject(DOCUMENT);

  constructor() {
    // Effect that watches schema() and renders it.
    effect((onCleanup) => {
      const schema = this.schema();

      const views: ViewRef[] = [];
      const cssStrings: string[] = [];
      const node = untracked(() => this.render(schema, views, [], cssStrings));

      // Inject styles right before appending to DOM
      // Concatenate all CSS into a single style tag
      const styleTag = cssStrings.length > 0
        ? this.styleInjector.inject(cssStrings.join('\n'))
        : null;

      this.host.appendChild(node);

      onCleanup(() => {
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
   * @param schema - The schema node to render.
   * @param views - An array to collect created component views for cleanup.
   * @param path - The path of indices from the root to this node, used for schema updates.
   * @param cssStrings - An array to collect CSS strings for style injection.
   * @returns The rendered DOM node.
   */
  private render(
    schema: DaffContentSchema,
    views: ViewRef[],
    path: number[],
    cssStrings: string[],
  ): ChildNode {
    if (!schema) {
      return this.document.createElement('br');
    }

    switch (schema.type) {
      case 'componentSchema': {
        const component = this.getComponentType(schema.name);
        if (component) {
          // Render children first for content projection
          const projectableNodes: Node[][] = [];
          if (schema.children) {
            const childNodes = schema.children.map((child, index) =>
              this.render(child, views, [...path, index], cssStrings),
            );
            projectableNodes.push(childNodes);
          }

          const cmp = createComponent(component, {
            environmentInjector: this.injector,
            bindings: Object.keys(schema.inputs ?? {}).map((key) =>
              inputBinding(key, () => schema.inputs[key]),
            ),
            // Pass children as projectable nodes for ng-content
            projectableNodes: projectableNodes.length > 0 ? projectableNodes : undefined,
          });

          this.appRef.attachView(cmp.hostView);
          views.push(cmp.hostView);

          cmp.location.nativeElement.removeAttribute('ng-version');

          return cmp.location.nativeElement;
        }
        return this.document.createElement('br');
      }
      case 'elementSchema': {
        if (!schema.element || schema.element === '') {
          return this.document.createElement('br');
        }

        const element = this.document.createElement(schema.element);

        // Handle dynamic styles if present
        if (schema.styles) {
          const className = generateClassName();
          const css = generateCSS(className, schema.styles);
          cssStrings.push(css);
          element.classList.add(className);
        }

        for (const key of Object.keys(schema.attributes ?? {})) {
          element.setAttribute(key, schema.attributes[key]);
        }

        if (schema.children) {
          element.append(
            ...schema.children.map((child, index) =>
              this.render(child, views, [...path, index], cssStrings),
            ),
          );
        }
        return element;
      }
      case 'textSchema': {
        return this.createEditableText(schema, path);
      }
      default:
        return this.document.createElement('br');
    }
  }

  /**
   * Creates an editable text span for a text schema node.
   *
   * The span has contenteditable enabled and includes:
   * - Visual hover feedback (light blue background)
   * - Blur handler to emit schema updates when text changes
   * - Enter key handler to confirm edits
   *
   * @param textSchema - The text schema node containing the text content.
   * @param path - The path of indices from the root to this text node.
   * @returns An HTMLElement (span) with contenteditable enabled.
   */
  private createEditableText(textSchema: DaffTextSchema, path: number[]): HTMLElement {
    const span = this.document.createElement('span');
    span.contentEditable = 'true';
    span.textContent = textSchema.text;
    span.style.outline = 'none';
    span.style.display = 'inline-block';
    span.style.minWidth = '1px';

    // Add a visual indicator on hover
    span.addEventListener('mouseenter', () => {
      span.style.backgroundColor = 'rgba(100, 149, 237, 0.1)';
    });

    span.addEventListener('mouseleave', () => {
      span.style.backgroundColor = 'transparent';
    });

    // Handle text changes
    span.addEventListener('blur', () => {
      const newText = span.textContent || '';
      if (newText !== textSchema.text) {
        this.updateTextInSchema(path, newText);
      }
    });

    // Prevent Enter from creating new lines (optional)
    span.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        span.blur();
      }
    });

    return span;
  }

  /**
   * Emits an updated schema with the new text value at the specified path.
   *
   * @param path - The path of indices from the root to the text node to update.
   * @param newText - The new text value to set.
   */
  private updateTextInSchema(path: number[], newText: string): void {
    const schema = this.schema();
    if (!schema) {
      return;
    }

    const updatedSchema = this.deepCloneAndUpdate(schema, path, newText);
    this.schemaUpdate.emit(updatedSchema);
  }

  /**
   * Creates a deep clone of the schema with the text updated at the specified path.
   *
   * This method recursively navigates the schema tree using the path indices
   * and returns a new schema object with the text node at the target path updated.
   *
   * @param schema - The schema to clone and update.
   * @param path - The path of indices to the target text node.
   * @param newText - The new text value to set.
   * @returns A new schema with the updated text value.
   */
  private deepCloneAndUpdate(
    schema: DaffContentSchema,
    path: number[],
    newText: string,
  ): DaffContentSchema {
    if (!schema) {
      return schema;
    }

    // If we've reached the target
    if (path.length === 0) {
      if (schema.type === 'textSchema') {
        return { ...schema, text: newText };
      }
      return schema;
    }

    // Navigate deeper for both elementSchema and componentSchema
    if (
      (schema.type === 'elementSchema' || schema.type === 'componentSchema') &&
      schema.children
    ) {
      const [index, ...restPath] = path;
      const newChildren = [...schema.children];
      newChildren[index] = this.deepCloneAndUpdate(
        newChildren[index],
        restPath,
        newText,
      );
      return { ...schema, children: newChildren };
    }

    return schema;
  }

  /**
   * Retrieves the component type from the component map by name.
   *
   * @param name - The registered name of the component.
   * @returns The component type if found, or null if not registered.
   */
  private getComponentType(name: string): Type<any> | null {
    return this.componentMap[<keyof typeof this.componentMap>name] || null;
  }
}
