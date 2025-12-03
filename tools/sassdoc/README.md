# SassDoc JSON Extractor for Daffodil

This directory contains tools for extracting and processing Sass documentation from Daffodil's SCSS files into structured JSON format.

## How to Run

### Prerequisites

Make sure you have the dependencies installed:

```bash
cd tools/sassdoc
npm install
```

To extract Sass documentation as JSON:

```bash
npm run build
```

This will:
- Parse SCSS files and extract documented items
- Generate a JSON file at `dist/docs/sassdoc-output.json`

## Edit the path in `sassdoc.config.ts`

```typescript
const customConfig: SassDocConfig = {
  src: ['path/to/your/scss/**/*.scss'],
};
```

## SassDoc Comment Format

**Important:** SassDoc only works with triple-slash comments (`///`). Regular double-slash comments (`//`) are completely ignored.

### Example

See [libs/design/scss/theming/_color-palettes.scss](../../libs/design/scss/theming/_color-palettes.scss) for a working example of properly formatted SassDoc comments.

### Available Annotations

For a complete list of available annotations, see: [SassDoc Annotations](http://sassdoc.com/annotations/)

Common annotations include:
- `@group` - Organize items into groups
- `@example` - Show usage examples
- `@param` - Document function/mixin parameters
- `@return` - Document function return values
- `@deprecated` - Mark items as deprecated
- `@access` - Define public/private access


For more information, see the [SassDoc documentation](http://sassdoc.com/).
