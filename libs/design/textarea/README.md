# Textarea
Textarea allows a native HTML `<textarea>` element to work with the [Form Field](/libs/design/src/atoms/form/form-field/README.md) component.

## Overview
The textarea component has the same functionality as a native HTML `<textarea>` element, with additional custom styling and functionality. It **cannot** be used by itself and must be contained within a [DaffFormFieldComponent](/libs/design/src/atoms/form/form-field/README.md).

<design-land-example-viewer-container example="basic-textarea"></design-land-example-viewer-container>

## Usage
To use textarea, import `DaffTextareaComponent` directly into your custom component:

```ts
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffTextareaComponent,
  ],
})
export class CustomComponent {}
```

## Examples

### Disabled textarea
<design-land-example-viewer-container example="basic-textarea"></design-land-example-viewer-container>