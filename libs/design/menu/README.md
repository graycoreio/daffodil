# Menu
Menu is a small floating panel used to display a list of actions or navigational items.

## Overview
Menus only appear when a user interacts with a menu activator button. They should be used for secondary actions or options where users don't need immediate access to.

## Basic Menu
<design-land-example-viewer-container example="basic-menu"></design-land-example-viewer-container>

## Usage

To use menu, import `DaffMenuModule` into your custom module:

```ts
import { NgModule } from '@angular/core';

import { DaffMenuModule } from '@daffodil/design/menu';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffMenuModule,
  ],
})
export class CustomComponentModule { }
```

## Supported Content Types

### Menu Item
A menu consists of multiple `daff-menu-item`s. Menu items should be used with an anchor or button HTML element.

### Icon
An icon can be added before the content in `daff-menu-item` by using the `daffPrefix` selector.

### Menu Activator
A menu is attached to and triggered by the `daffMenuActivator` directive.
