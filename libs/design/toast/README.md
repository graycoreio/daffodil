# Toast
Toasts are notifications that provide application-level information. They are designed to mimic push notifications and appear temporarily on the screen.

## Overview
Toasts communicate updates about actions or events that require attention but are not directly tied to specific page content.

For short messages tied to page-level content or actions, use the [Notification](/libs/design/notification/README.md) component.

<design-land-example-viewer-container example="default-toast"></design-land-example-viewer-container>

## Usage
Add `provideDaffToast()` to the root provider of your application to enable toast functionality:

```ts
import { provideDaffToast } from '@daffodil/design/toast';

@NgModule({
  providers: [
    provideDaffToast(),
  ]
)}

export class AppModule {}
```

## Anatomy
When opening a toast with the `DaffToastService`, you can provide a `title`, `message`, and `actions` to define its content.

**Title**\
The primary text that summarizes the purpose of the toast.

**Message**\
Provides additional details or context about the toast. Keep this brief—ideally one to two short sentences.

**Actions**\
Include actionable buttons related to the toast. **A maximum of two buttons is recommended** to keep the toast concise.

```ts
open() {
  this.toast = this.toastService.open({
    title: 'Update Available' + ' ' + this.count++,
    message: 'A new version of this page is available.',
    actions: [
      { content: 'Update', color: 'theme-contrast', size: 'sm', eventEmitter: this.update },
      { content: 'Remind me later', type: 'flat', size: 'sm', eventEmitter: this.closeToast },
    ],
  });
}
```

## Dismissal
Toasts can be dismissed automatically via a timed duration or manually with a close button.

`duration` and `dismissible` can be configured when opening a toast with the `DaffToastService`.

### Timed duration
By default, toasts without actions dismiss automatically after `5000ms`. Toasts with actions remain visible until dismissed manually or until an action is taken.

> Actionable toasts should remain persistent. If a duration is required, make sure it is long enough for users to engage with the actions.

<design-land-example-viewer-container example="toast-with-custom-duration"></design-land-example-viewer-container>

### Close button
The close button is hidden by default. When a toast contains actions, the `dismissible` property is ignored.

For non-actionable toasts, the close button can be displayed by setting `dismissible: true`.

<design-land-example-viewer-container example="dismissible-toast"></design-land-example-viewer-container>

## Stacking
A maximum of three toasts can be displayed at once. Toasts stack vertically with the most recent toast at the top.

## Statuses
Toast status can be set when opening a toast through the `DaffToastService` by using a `DaffStatus` value.

<design-land-example-viewer-container example="toast-status"></design-land-example-viewer-container>

## Positions
On desktop, toasts appear in the top-right corner by default.

You can customize their position using the `position` property in `provideDaffToast()`:

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

> Note: On mobile, toasts always appear in the bottom-center position, regardless of configuration settings.

## Accessibility
Toasts announce their messages using appropriate ARIA roles:
- `role="status"` (default): Equivalent to `aria-live="polite"`, announcing messages without interrupting the user.
- role="alertdialog": Used when a toast contains actions. The toast will be focus trapped, and focus immediately moves to the actions.

Avoid setting a duration on actionable toasts, as they may disappear before the user can interact with them.

### Keyboard Interactions
| Key   | Action |
| ----- | ------ |
| `ESC` |  Dismisses a toast if it has actions and is focus trapped. |