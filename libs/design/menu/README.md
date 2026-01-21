# Menu
A menu is a floating panel that displays a list of actions or navigational items.

## Overview
Menus appear when users interact with a menu activator button. Use menus for secondary actions or options that don't require immediate access.

<design-land-example-viewer-container example="basic-menu"></design-land-example-viewer-container>

## Best practices

**When to use**
- Displaying a list of actions that don't need to be visible at all times
- Providing secondary or contextual options
- Creating dropdown navigation

**When not to use**
- Actions need to be immediately visible and accessible
- There are only one or two actions (consider using buttons instead)

## Usage
To use menu, import `DaffMenuModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffMenuModule } from '@daffodil/design/menu';
import { CustomComponent } from './custom.component';

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

## Anatomy
A menu component consists of the following parts:

### Menu Activator
**`[daffMenuActivator]`**: A directive attached to a button that triggers the menu to open. The selector doubles as an input for the menu content to display.

### Menu
**`<daff-menu>`**: The container component that holds menu items.

### Menu Item
**`<daff-menu-item>`**: Represents a single action or navigation item within the menu. Should be used with an anchor or button HTML element.

### Icon
Use the `[daffPrefix]` directive to add a decorative icon before the menu item content.

### Basic structure
```html
<button [daffMenuActivator]="menu">
  Open Menu
</button>

<ng-template #menu>
  <daff-menu>
    <button daff-menu-item>
      <fa-icon [icon]="faEdit" daffPrefix></fa-icon>
      Edit
    </button>
    <button daff-menu-item>
      <fa-icon [icon]="faTrash" daffPrefix></fa-icon>
      Delete
    </button>
    <a href="/settings" daff-menu-item>
      <fa-icon [icon]="faCog" daffPrefix></fa-icon>
      Settings
    </a>
  </daff-menu>
</ng-template>
```

## Features

### Accessing menu state
The menu activator provides an `isOpen` property that tracks whether the menu is currently open or closed. Use this to update your UI based on the menu state, such as changing icons or styling.

<design-land-example-viewer-container example="menu-with-icon-toggle"></design-land-example-viewer-container>

```html
<button [daffMenuActivator]="menuContent" #menu="daffMenuActivator">
  Options
  <fa-icon [icon]="menu.isOpen() ? faChevronUp : faChevronDown"></fa-icon>
</button>

<ng-template #menuContent>
  <daff-menu>
    <button daff-menu-item>Menu Item</button>
  </daff-menu>
</ng-template>
```

## Accessibility
Menu follows the [Menu and Menubar WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).

### Daffodil provides
- `role="menu"` and `role="menuitem"` on appropriate elements
- Focus management when menu opens and closes
- `aria-expanded` on the activator indicating the menu state

#### Keyboard interactions
Keyboard focus is placed on the first item when a menu is opened.

| Key | Action |
| --- | ------ |
| `Enter` / `Space` | Opens the menu when focused on the activator, or activates the focused menu item |
| `Escape` | Closes the menu and returns focus to the menu activator |
| `Down Arrow` | Moves focus to the next item. If focus is on the last item, focus moves to the first item |
| `Up Arrow` | Moves focus to the previous item. If focus is on the first item, focus moves to the last item |
| `Home` | Moves focus to the first item |
| `End` | Moves focus to the last item |

### Developer responsibilities
- Provide a meaningful label on the menu activator
- Ensure menu items have descriptive text or labels
- Use appropriate HTML elements (`<button>` for actions, `<a>` for navigation)
