# Backdrop Component

## Usage 

html
```
<daff-backdrop
    class="my-component__backdrop"
    [show]="show"
    [backdropIsVisible]="backdropIsVisible"
    (backdropClicked)="onBackdropClicked()"></daff-backdrop>
```

css
```
.my-component__backdrop {
  z-index: $backdrop-z-index;
}
```
