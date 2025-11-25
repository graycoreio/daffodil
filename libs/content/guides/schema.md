# Content Schema

The schema system provides a flexible, type-safe way to define content structure in `@daffodil/content`. Schemas are hierarchical definitions that can represent elements, components, and text, allowing you to build complex page layouts programmatically. 

Simply stated, this schema corresponds to a JSON-structure representing HTML.

## Overview

A content schema is a tree structure defined by the type `DaffContentSchema` where each node can be one of three types:

- [**Text Schema**](#text-schema): Represents text nodes
- [**Element Schema**](#element-schema): Represents HTML elements with attributes and styles
- [**Component Schema**](#component-schema): Represents Angular components with inputs

## Text Schema

Text schemas represent simple text nodes.

### Interface

```typescript
interface DaffTextSchema {
  type: 'textSchema';
  text: string;
}
```

### Example

```typescript
const textSchema: DaffTextSchema = {
  type: 'textSchema',
  text: 'This is some text.'
};
```

## Element Schema

`DaffContentElementSchema` define HTML elements with optional attributes, styles, and children.

### Example: Basic Element

```typescript
const divSchema: DaffContentElementSchema = {
  type: 'elementSchema',
  element: 'div',
  attributes: {
    class: 'container',
    id: 'main-content'
  },
  children: [
    {
      type: 'textSchema',
      text: 'Hello World'
    }
  ]
};
```

### Example: Responsive Styles

Element schemas support responsive styling through breakpoint definitions:

```typescript
const heroSchema: DaffContentElementSchema = {
  type: 'elementSchema',
  element: 'section',
  styles: {
    base: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center'
    },
    breakpoints: {
      '(min-width: 768px)': {
        padding: '40px'
      },
      '(min-width: 1024px)': {
        padding: '60px',
        fontSize: '1.5rem'
      }
    }
  },
  children: [
    {
      type: 'elementSchema',
      element: 'h1',
      children: [
        {
          type: 'textSchema',
          text: 'Welcome to Our Site'
        }
      ]
    }
  ]
};
```

## Component Schema

`DaffContentComponentSchema` allow you to render Angular components dynamically with specified inputs.

### Example: Component with Inputs

```typescript
const productCardSchema: DaffContentComponentSchema = {
  type: 'componentSchema',
  name: 'ProductCard',
  inputs: {
    productId: '12345',
    showPrice: true,
    variant: 'compact'
  }
};
```

### Example: Component with Children

```typescript
const cardSchema: DaffContentComponentSchema = {
  type: 'componentSchema',
  name: 'Card',
  inputs: {
    title: 'Featured Product',
    variant: 'elevated'
  },
  children: [
    {
      type: 'elementSchema',
      element: 'p',
      children: [
        {
          type: 'textSchema',
          text: 'Check out our latest offering!'
        }
      ]
    }
  ]
};
```

## Complex Example

Here's a complete example combining all schema types to create a product feature section:

```typescript
const featureSectionSchema: DaffContentSchema = {
  type: 'elementSchema',
  element: 'section',
  attributes: {
    class: 'feature-section'
  },
  styles: {
    base: {
      padding: '40px 20px',
      backgroundColor: '#ffffff'
    },
    breakpoints: {
      '(min-width: 768px)': {
        padding: '80px 40px'
      }
    }
  },
  children: [
    {
      type: 'elementSchema',
      element: 'div',
      attributes: {
        class: 'container'
      },
      children: [
        {
          type: 'elementSchema',
          element: 'h2',
          styles: {
            base: {
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              textAlign: 'center'
            }
          },
          children: [
            {
              type: 'textSchema',
              text: 'Featured Products'
            }
          ]
        },
        {
          type: 'elementSchema',
          element: 'div',
          styles: {
            base: {
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '20px'
            },
            breakpoints: {
              '(min-width: 768px)': {
                gridTemplateColumns: '1fr 1fr 1fr'
              }
            }
          },
          children: [
            {
              type: 'componentSchema',
              name: 'ProductCard',
              inputs: { productId: '1', featured: true }
            },
            {
              type: 'componentSchema',
              name: 'ProductCard',
              inputs: { productId: '2', featured: true }
            },
            {
              type: 'componentSchema',
              name: 'ProductCard',
              inputs: { productId: '3', featured: true }
            }
          ]
        }
      ]
    }
  ]
};
```
