# Loading Icon
Loading icons are used as an indicator of an event in progress.

## Overview
Loading icons are used to indicate to users that an event is ocurring and is still in progress. They should only be used for short loading processes. For events that can take a considerable amount of time, use the [Progress Bar](/libs/design/progress-bar/README.md) component instead.

## Usage

### Within a standalone component
To use loading icon in a standalone component, import `DAFF_LOADING_ICON_COMPONENTS` directly into your custom component:

```ts
import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use loading icon in a module, import `DaffLoadingIconModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffLoadingIconModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Colors
Use the `color` property to change the color of a loading icon. The default color is gray.

> `theme` and `white` should be used on a darker background in order to have sufficient contrast.

<design-land-example-viewer-container example="loading-icon-color"></design-land-example-viewer-container>

## Accessibility
Loading icons should be given meaningful labels by using `aria-label` or `aria-labelledby`.

If a loading icon is used to indicate a process in progress, using [aria-live](https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-live) and [aria-busy](https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-busy") should be strongly considered.