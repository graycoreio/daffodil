# Menu
A menu is a floating panel that displays a list of actions or navigational items.

## Overview
Menus appear when users interact with a menu activator button. Use menus for secondary actions or options that don't require immediate access.

<design-land-example-viewer-container example="basic-menu"></design-land-example-viewer-container>

## Best practices

**When to use**
- You need to display secondary actions or options
- Screen space is limited
- You want to group related actions together

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
A menu consists of the following components:

### Container
**`<daff-menu>`**: The floating panel that contains menu items.

### Menu Item
**`[daff-menu-item]`**: Individual clickable items within the menu. Applied to `<button>` or `<a>` elements.

### Menu Activator
**`[daffMenuActivator]`**: Directive that triggers the menu to open/close. Applied to the button that activates the menu.

### Basic structure
```html
<button daffMenuActivator>
  Open Menu
</button>

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
```

## Accessibility
Menu follows the [Menu and Menubar WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).

### Daffodil provides
- Proper ARIA attributes for menu and menu items
- Focus management when menu opens and closes

#### Keyboard interactions
When a menu opens, keyboard focus is placed on the first item. The keyboard commands described in this section enable users to navigate within an opened menu.

| Key | Action |
| --- | ------ |
| `Enter` | Activates a menu item and closes the menu |
| `Down Arrow` | Moves focus to the next item. If focus is on the last item, focus moves to the first item |
| `Up Arrow` | Moves focus to the previous item. If focus is on the first item, focus moves to the last item |
| `Home` | Moves focus to the first item |
| `End` | Moves focus to the last item |
| `Escape` | Closes the menu and returns focus to the menu activator |

### Developer responsibilities
- Ensure menu items have descriptive text or labels
- Use appropriate HTML elements (`<button>` for actions, `<a>` for navigation)
