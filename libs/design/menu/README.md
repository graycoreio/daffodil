# Menu
A menu is a floating panel that displays a list of actions or navigational items.

## Overview
Menus appear when users interact with a menu activator button. Use menus for secondary actions or options that don't require immediate access.

<daff-docs-example-viewer example="basic-menu"></daff-docs-example-viewer>

## Best practices

**When to use**
- Displaying a list of actions that don't need to be visible at all times
- Providing secondary or contextual options
- Creating dropdown navigation

**When not to use**
- Actions need to be immediately visible and accessible
- There are only one or two actions (consider using buttons instead)

## Usage

Import `DAFF_MENU_COMPONENTS` into your component:

```ts
import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_MENU_COMPONENTS,
  ],
})
export class CustomComponent {}
```

> **Deprecation notice:**
> 
> `DaffMenuModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A menu is composed of an activator, a container, and one or more items:

```html
<button [daffMenuActivator]="actionsMenu">
  Actions
</button>

<ng-template #actionsMenu>
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

- **`[daffMenuActivator]`**: A directive attached to a button that triggers the menu to open. The selector doubles as an input for the menu content to display.
- **`<daff-menu>`**: The container component that holds all menu items.
- **`<daff-menu-item>`**: A single action or navigation item within the menu. Use with an anchor or button element.
- **`[daffPrefix]`**: Adds a decorative icon before the menu item content.

## Features

### Menu state
Use the actiavtor's `isOpen` property to track whether the menu is currently open or closed. Use this to update your UI based on the menu state, such as changing icons or styling.

<daff-docs-example-viewer example="menu-with-icon-toggle"></daff-docs-example-viewer>

### Custom IDs
Menus generate a unique id automatically. To set your own, add an `id` to the activator and the menu becomes `{id}-menu`.

<daff-docs-example-viewer example="menu-with-id"></daff-docs-example-viewer>

### Customize menu positions
By default a menu opens below its activator, aligned to its left edge. Set `yPosition` (`below` or `above`) on the activator to control whether it drops down or rises up, and `xPosition` (`after` or `before`) to align the menu's left or right edge with the activator. The menu stays anchored to the activator and scrolls in place when its content is taller than the available space.

<daff-docs-example-viewer example="menu-with-position"></daff-docs-example-viewer>

## Accessibility
Menu follows the [Menu and Menubar WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).

### Built-in behavior
- `role="menu"` and `role="menuitem"` on appropriate elements
- Focus management when menu opens and closes
- `aria-expanded` on the activator indicating the menu state

### Developer responsibilities
- Provide a meaningful label on the menu activator
- Ensure menu items have descriptive text or labels
- Use appropriate HTML elements (`<button>` for actions, `<a>` for navigation)

### Keyboard interactions
Keyboard focus is placed on the first item when a menu is opened.

| Key | Action |
| --- | ------ |
| `Enter` / `Space` | Opens the menu when focused on the activator, or activates the focused menu item |
| `Escape` | Closes the menu and returns focus to the menu activator |
| `Down Arrow` | Moves focus to the next item. If focus is on the last item, focus moves to the first item |
| `Up Arrow` | Moves focus to the previous item. If focus is on the first item, focus moves to the last item |
| `Home` | Moves focus to the first item |
| `End` | Moves focus to the last item |
