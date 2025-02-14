# Text Snippet
The text snippet component shows a snippet of text, with the ability to show or hide content beyond one line of text.

## Usage

### Within a standalone component
To use a text snippet in a standalone component, import `DaffTextSnippetComponent` directly into your custom component:

```ts
import { DaffTextSnippetComponent } from '@daffodil/design/text-snippet';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffTextSnippetComponent,
  ],
})
export class CustomComponent {}
```