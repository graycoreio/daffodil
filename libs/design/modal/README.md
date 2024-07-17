# Modal
Modal is a dynamically rendered element that floats above the rest of a page's content. It can be especially useful for interstitials that require additional user feedback.

## Basic Modal
<design-land-example-viewer-container example="basic-modal"></design-land-example-viewer-container>

## Supported Content Types
A modal includes minimally pre-styled components and directives to help structure the content in your modal.

### Header
Header can be added to a modal by using `<daff-modal-header>`. The header includes a title and an optional close button.

#### Title
Title can be added to the header by using the `[daffModalTitle]` directive.

#### Close Button
The close button in the header is shown by default but can be hidden by setting the `dismissible` property to `false` on the header.

### Content
Content can be added to a modal by using `<daff-modal-content>`. It should only be used once. It's a wrapper container that can be used to place all additional components and text content within a modal. The content container allows for a ton of control and customization because it's minimally pre-styled and serves as a wrapping and spacing container that is scrollable.

### Actions
Buttons can be added to a modal by using `<daff-modal-actions>`. This container will always be positioned at the bottom of a modal. The horizontal alignment of the actions is set to `end`.

## Configurations

A modal relies on using the `entryComponents` of the particular Angular `@NgModule`. To use the features of the `DaffModalComponent`:

1. Import the `DaffModalModule` as you would with any other `@daffodil/design` component
2. Add the component that you want rendered inside the modal to your `@NgModule`'s `entryComponents`

```ts
custom-modal.module.ts

@NgModule({
  declarations: [
    CustomModalComponent,
  ],
  imports: [
    DaffModalModule,
  ],
  entryComponents: [
    CustomModalComponent
  ]
})
export class CustomModalModule { 
}
```

After you have imported the `DaffModalModule` into your component or module's imports, you can use the `DaffModalService` to open and close instances of the `DaffModalComponent`.

```ts
custom-modal.component.ts

@Component({
  template: '<button (click)="showModal()"></button>'
})
export class CustomModalComponent {
  constructor(private modalService: DaffModalService) {}

  showModal() {
    this.modalService.open(MyModalContentComponent);
  }
}
```

> You will likely never render the `DaffModalComponent` directly like you would with other components due to its dynamic nature.

## Dismissing a Modal
A modal can be dismissed via the close button or the `ESC` key. The close button is shown by default but can be hidden by setting the `disimssible` property to `false` on `<daff-modal-header>`. Additionally, the `[daffModalClose]` directive can be added to a `<button>` HTML element.

## Accessibility
Modal works with the ARIA `role="dialog"` and `aria-modal="true"` attributes to provide an accessible experience. `aria-labelledby` is assigned the `[daffModalTitle]` string. When a modal is opened, the first tabbable element within it will receive focus.

### Keyboard Interactions
A modal can be closed by choosing one of the actions buttons, the close button in the header, or it can be dismissed by pressing the `ESC` key.