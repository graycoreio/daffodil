# Modal Component

The `DaffModalComponent` is a dynamically rendered component that floats above the rest of a page's content. It can be especially useful for interstitials that require additional user feedback.

## Usage

`DaffModalComponent` relies on using the `entryComponents` of the particular Angular `@NgModule`. To use the features of the `DaffModalComponent`:

* Import the `DaffModalModule` as you would with any other `@daffodil/design` component
* Add the component that you want rendered inside the modal to your `@NgModule`'s `entryComponents`

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

Once you have configured your `@NgModule` you can take advantage of the `DaffModalService` that is provided by the `DaffModalModule` to `open` and `close` the instance of the `DaffModalComponent`. 

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