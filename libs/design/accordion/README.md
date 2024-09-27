# Accordion
An accordion is a group of vertically stacked headings used to toggle the visibility of a section of content.

## Overview
Accordions are made up of `<daff-accordion-item>`s that can be expanded or collapsed to display large amounts of information. Accordions are helpful to shorten pages and reduce scrolling by hiding content that's not crucial to display at all times.

<design-land-example-viewer-container example="basic-accordion"></design-land-example-viewer-container>

## Supported Content Types
An accordion item can include a `[daffAccordionItemTitle]`, which provides a high level overview of the content. Any other content within an accordion item will be displayed as the primary content.

By default, the accordion item includes a toggle icon at the end of the header to indicate if it's expanded or collapsed.

### Setting an item to be expanded by default 
An item content can be visibile on render by setting the `initiallyExpanded` property to `true` on `daff-accordion-item`.

## Usage

### Within a standalone component
To use accordion in a standalone component, import it directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
  imports: [
    DAFF_ACCORDION_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use accordion in a module, import `DaffAccordionModule` into your custom module:

```ts
import { NgModule } from '@angular/core';

import { DaffAccordionModule } from '@daffodil/design/accordion';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffAccordionModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.
