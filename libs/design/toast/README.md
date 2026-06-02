# Toast
Toasts are notifications that provide application-level information. They are designed to mimic push notifications and appear temporarily on the screen.

## Overview
Toasts communicate updates about actions or events that require attention but are not directly tied to specific page content.

For short messages tied to page-level content or actions, use the [notification](/libs/design/notification/README.md) component.

<daff-docs-example-viewer example="default-toast"></daff-docs-example-viewer>

## Usage
Add `provideDaffToast()` to your application's root providers:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideDaffToast } from '@daffodil/design/toast';

export const appConfig: ApplicationConfig = {
  providers: [
    provideDaffToast(),
  ],
};
```

Then inject `DaffToastService` to open toasts from your component:

```ts
import { DaffToastService } from '@daffodil/design/toast';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
})
export class CustomComponent {
  constructor(private toastService: DaffToastService) {}
}
```

## Anatomy
A toast is composed of a title, message, and optional actions:

```ts
this.toastService.open({
  title: 'Update available',
  message: 'A new version of this page is available.',
  actions: [
    { content: 'Update', color: 'theme-contrast', size: 'sm' },
    { content: 'Remind me later', type: 'flat', size: 'sm' },
  ],
});
```

- **`title`**: The primary text that summarizes the purpose of the toast.
- **`message`**: Additional details or context about the toast. Keep this brief — ideally one to two short sentences.
- **`actions`**: Actionable buttons related to the toast. A maximum of two buttons is recommended to keep the toast concise.

## Features

### Dismissal
Toasts can be dismissed automatically via a timed duration or manually with a close button. Both `duration` and `dismissible` can be configured when opening a toast with the `DaffToastService`.

By default, toasts without actions dismiss automatically after `5000ms`. Toasts with actions remain visible until dismissed manually or until an action is taken.

<daff-docs-example-viewer example="custom-duration-toast"></daff-docs-example-viewer>

For non-actionable toasts, set `dismissible: true` to display a close button. When a toast contains actions, the `dismissible` property is ignored.

<daff-docs-example-viewer example="dismissible-toast"></daff-docs-example-viewer>

### Stack limit
A maximum of three toasts can be displayed at once. Toasts stack vertically with the most recent toast at the top.

### Statuses
Toast status can be set when opening a toast through the `DaffToastService` by using a `DaffStatus` value.

<daff-docs-example-viewer example="toast-status"></daff-docs-example-viewer>

### Positions
On desktop, toasts appear in the top-right corner by default. Customize their position using the `position` property in `provideDaffToast()`:

```ts
providers: [
  provideDaffToast({
    position: {
      vertical: 'bottom',
      horizontal: 'right',
    },
  }),
],
```

> **Note**
>
> On mobile, toasts always appear in the bottom-center position, regardless of configuration settings.

## Best practices
- Keep messages brief — toasts are temporary and easy to miss.
- Limit actions to two buttons so the toast stays scannable.
- Avoid setting a duration on actionable toasts, as they may disappear before the user can interact with them.

## Accessibility

### Built-in behavior
- Toasts without actions use `role="status"` (equivalent to `aria-live="polite"`), announcing messages without interrupting the user.
- Toasts with actions use `role="alertdialog"`, are focus trapped, and focus moves immediately to the actions.
- `ESC` dismisses a focus trapped actionable toast.

### Developer responsibilities
- Avoid setting a duration on actionable toasts so users have time to interact with them.