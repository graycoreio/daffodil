# Modal
Modal is a dynamically rendered element that floats above the rest of a page's content, requiring user interaction before returning to the main application.

## Overview
Modals are used to capture information or attention. They overlay the main content and prevent interaction with the page until the modal is dismissed.

<design-land-example-viewer-container example="basic-modal"></design-land-example-viewer-container>

## Best practices

**When to use**
- Display important information that require a user response
- Display non-essential but detailed content related to the underlying page

**When not to use**
- To display critical information or warnings
- To provide status feedback or messages (use [Notification](/libs/design/notification/README.md) or [Toast](/libs/design/toast/README.md) instead)

## Usage

### Within a standalone component
To use modal in a standalone component, import `DAFF_MODAL_COMPONENTS` directly into your custom component:

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

### Within a module (deprecated)
To use modal in a module, import `DaffModalModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffModalModule } from '@daffodil/design/modal';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffModalModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy
A modal consists of the following contents, displayed in the order listed:

### Header
**`<daff-modal-header>`**: The header section containing the title and optional close button.

#### Title
**`[daffModalTitle]`**: The primary text summarizing the modal.

#### Close button
The close button in the header is shown by default but can be hidden by setting the `dismissible` property to `false` on the header.

### Content
**`<daff-modal-content>`**: The scrollable container for the modal's main content. Use this once per modal to wrap all body content.

### Actions
**`<daff-modal-actions>`**: The container for action buttons, positioned at the bottom of the modal with right-aligned buttons. If two buttons are needed, place the primary button the left and the secondary button on the right.

### Basic structure
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

## Dismissing a modal
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

### Position configuration
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

### Daffodil provides
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