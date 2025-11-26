# SassDoc for Daffodil

This directory contains the SassDoc configuration and build tools for generating documentation from Daffodil's SCSS files.

## How to Run the Parser

### Prerequisites

Make sure you have the dependencies installed:

```bash
cd tools/sassdoc
npm install
```

### Test Mode (Single File)

To test SassDoc on a single file (currently set to `_font-weight.scss`):

```bash
npm run build:test
```

This will:
- Parse only the test file (`libs/design/scss/typography/mixins/_font-weight.scss`)
- Generate HTML documentation in `dist/docs/sass-docs-test/`
- Create a JSON output file at `dist/docs/sassdoc-test-output.json`
- Show count of documented items found

### Production Mode (All Files)

To run SassDoc on all SCSS files in the design system:

```bash
npm run build
```

This will:
- Parse all SCSS files in `libs/design/scss/`
- Generate HTML documentation in `dist/docs/sass-docs/`
- Exclude test files (`*.spec.scss`)

## SassDoc Comment Format

**Important:** SassDoc only works with triple-slash comments (`///`). Regular double-slash comments (`//`) are completely ignored.

### Example

See [libs/design/scss/typography/mixins/_font-weight.scss](../../libs/design/scss/typography/mixins/_font-weight.scss) for a working example of properly formatted SassDoc comments.

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
