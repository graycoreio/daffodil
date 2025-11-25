/**
 * A union type representing all possible content schema nodes.
 * Can be an element, component, text node, or undefined.
 */
export type DaffContentSchema = DaffContentElementSchema | DaffContentComponentSchema | DaffTextSchema | undefined;

/**
 * Represents a text node in the content schema.
 *
 * @example
 * ```typescript
 * const textNode: DaffTextSchema = {
 *   type: 'textSchema',
 *   text: 'Hello, world!'
 * };
 * ```
 */
export interface DaffTextSchema {
  /** Discriminator for text schema nodes. */
  type: 'textSchema';
  /** The text content to render. */
  text: string;
}

/**
 * Represents an Angular component in the content schema.
 * Used to dynamically render components with inputs and optional children.
 *
 * @example
 * ```typescript
 * const buttonComponent: DaffContentComponentSchema = {
 *   type: 'componentSchema',
 *   name: 'DaffButtonComponent',
 *   inputs: {
 *     color: 'primary',
 *     size: 'lg'
 *   },
 *   children: [
 *     { type: 'textSchema', text: 'Click me' }
 *   ]
 * };
 * ```
 */
export interface DaffContentComponentSchema {
  /** Discriminator for component schema nodes. */
  type: 'componentSchema';
  /** The component name to render. Must be registered in the component registry. */
  name: string;
  /** Key-value pairs of inputs to pass to the component. */
  inputs: {[key: string]: any};
  /** Optional child content to project into the component. */
  children?: DaffContentSchema[];
}

/**
 * Represents an HTML element in the content schema.
 * Used to render native HTML elements with attributes, styles, and children.
 *
 * @example
 * ```typescript
 * const divElement: DaffContentElementSchema = {
 *   type: 'elementSchema',
 *   element: 'div',
 *   attributes: {
 *     'class': 'container',
 *     'id': 'main-content'
 *   },
 *   styles: {
 *     base: {
 *       padding: 16,
 *       'background-color': '#f5f5f5'
 *     },
 *     breakpoints: {
 *       '(min-width: 768px': {
 *         padding: 32
 *       }
 *     }
 *   },
 *   children: [
 *     { type: 'textSchema', text: 'Welcome!' }
 *   ]
 * };
 * ```
 */
export interface DaffContentElementSchema {
  /** Discriminator for element schema nodes. */
  type: 'elementSchema';
  /** The HTML element tag name (e.g., 'div', 'span', 'section'). */
  element: string;
  /** Optional HTML attributes to apply to the element. */
  attributes?: {[key: string]: string};
  /** Optional child content to render inside the element. */
  children?: DaffContentSchema[];
  /** Optional styles to apply to the element. */
  styles?: {
    /** Base styles applied at all viewport sizes. Numeric values are converted to px. */
    base?: {[key: string]: string | number};
    /** Responsive styles applied via container queries. */
    breakpoints?: {
      [mediaQuery: string]: {[key: string]: string | number};
    };
  };
}
