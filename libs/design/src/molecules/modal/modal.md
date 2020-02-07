# Modal Component

The `DaffModalComponent` component is a dynamically rendered component that allows you to render a component of your choice on the page above the rest of the content. This component can be especially useful for interstitials that require additional user feedback.

## Usage

Using the `DaffModalComponent` relies upon using the `entryComponents` of your particular Angular module. To use the features of the `DaffModalComponent` you will have to both import the `DaffModalModule` as you would with any other `@daffodil/design` component, but you will also have to additionally add the component that you would like to render inside the `DaffModalComponent` to your module's `entryComponents`.

```ts
my.module.ts

@NgModule({
  declarations: [
    MyModalContentComponent,
  ],
  imports: [
    DaffModalModule,
  ],
  entryComponents: [
    MyModalContentComponent
  ]
})
export class ModalModule { 
}
```

Once your module is setup, you can take advantage of the `DaffModalService` that is provided by the `DaffModalModule` to open and close your instance of the `DaffModalComponent`. 

```ts
my-other.component.ts

@Component({
  template: '<button (click)="showModal()"></button>'
})
export class MyOtherComponent {
  constructor(private modalService: DaffModalService) {}

  showModal() {
    this.modalService.open(MyModalContentComponent);
  }
}
```

> You will likely never render the `DaffModalComponent` directly like you would with other components due to its dynamic nature.