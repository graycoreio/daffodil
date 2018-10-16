# Modal Component

## Usage
```
<daff-modal [show]="showModal" (hide)="hideModal()" verticalPosition="top">
  modal content
</daff-modal>
```

## Inputs
### show 
    - boolean that controls when modal is shown.
### verticalPosition 
    - places the modal at the top, bottom, or middle of the page.
    - options: top, bottom, center
### horizontalPosition
    - places the modal at the left, right, or center of the page.
    - options: left, right, center

## Outputs
### hide
    - hides the modal
