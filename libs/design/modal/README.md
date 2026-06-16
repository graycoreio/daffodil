# Modal
Modal is a dynamically rendered element that floats above the rest of a page's content, requiring user interaction before returning to the main application.

## Overview
Modals are used to capture information or attention. They overlay the main content and prevent interaction with the page until the modal is dismissed.

<daff-docs-example-viewer example="basic-modal"></daff-docs-example-viewer>

## Best practices

**When to use**
- Display important information that require a user response
- Display non-essential but detailed content related to the underlying page

**When not to use**
- To display critical information or warnings
- To provide status feedback or messages (use [Notification](/libs/design/notification/README.md) or [Toast](/libs/design/toast/README.md) instead)

## Usage

Import `DAFF_MODAL_COMPONENTS` into your component:

```ts
import { DAFF_MODAL_COMPONENTS } from '@daffodil/design/modal';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_MODAL_COMPONENTS,
  ],
})
export class CustomComponent {}
```

> **Deprecation notice:**
> 
> `DaffModalModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A modal is composed of a header, content, and actions, displayed in the order listed:

```html
<daff-modal-header>
  <h2 daffModalTitle>Modal Title</h2>
</daff-modal-header>
<daff-modal-content>
  <p>Modal content goes here</p>
</daff-modal-content>
<daff-modal-actions>
  <button daff-button>Cancel</button>
  <button daff-button color="primary">Confirm</button>
</daff-modal-actions>
```

- **`<daff-modal-header>`**: The header section containing the title and optional close button.
- **`[daffModalTitle]`**: The primary text summarizing the modal.
- **`<daff-modal-content>`**: The scrollable container for the modal's main content. Use this once per modal to wrap all body content.
- **`<daff-modal-actions>`**: The container for action buttons, positioned at the bottom of the modal with right-aligned buttons. If two buttons are needed, place the primary button on the left and the secondary button on the right.

## Features

### Dismissal
A modal can be dismissed via:
- The close button in the header (shown by default)
- The `ESC` key
- A button with the `[daffModalClose]` directive within `<daff-modal-actions>`.

To hide the close button, set `dismissible` to `false` on `<daff-modal-header>`:

```html
<daff-modal-header [dismissible]="false">
  <h2 daffModalTitle>Modal Title</h2>
</daff-modal-header>
```

### Position
By default, modals are horizontally and vertically centered on the screen. You can position a modal at the top of the screen by passing a `position` configuration when opening the modal:

```ts
constructor(private modalService: DaffModalService) {}

showModal() {
  this.modal = this.modalService.open(
    ModalContentComponent,
    {
      position: {
        vertical: 'top',
      },
    },
  );
}
```

You can also adjust how far from the top the modal appears by setting `offsetTop`:

```ts
showModal() {
  this.modal = this.modalService.open(
    ModalContentComponent,
    {
      position: {
        vertical: 'top',
        offsetTop: '5rem',
      }
    },
  );
}
```

> Note: The horizontal position is always centered and cannot be customized.

## Accessibility
Modal implements the [Dialog (Modal) WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

### Built-in behavior
- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby` linked to the `[daffModalTitle]` element
- When opened, focus moves to the first tabbable element within the modal
- Focus is trapped within the modal while open
- When closed, focus returns to the element that triggered the modal

### Developer responsibilities
- Provide an `aria-labelledby` through the `DafffModalService` if `[daffModalTitle]` is not used
- Add `aria-haspopup="dialog"` to the element that opens the modal

```html
<button daff-button (click)="showModal()" aria-haspopup="dialog">Open Modal</button>
```

```ts
constructor(private modalService: DaffModalService) {}

showModal() {
	this.modal = this.modalService.open(
		BasicModalContentComponent,
		{ ariaLabelledBy: 'Modal Title' },
	);
}
```

### Keyboard interactions
| Key | Action |
| --- | ------ |
| `Tab` | Moves focus to the next focusable element within the modal. |
| `ESC` | Closes the modal and returns focus to the triggering element. |