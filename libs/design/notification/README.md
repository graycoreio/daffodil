# Notification
A notification provides contextual feedback or information related to user actions within a page's content.

## Overview
Notifications display short messages that are closely associated with nearby content or actions. They're commonly used to confirm actions, display warnings, or provide contextual information within a specific area of the page.

Notifications should not be used to display app-level alerts. For global messages, use the [Toast](/libs/design/toast/README.md) component.

<daff-docs-example-viewer example="default-notification"></daff-docs-example-viewer>

## Best practices

**When to use**
- Confirming user actions within a specific page area
- Displaying warnings or alerts related to nearby content
- Providing contextual feedback for forms or operations

## Usage

Import `DAFF_NOTIFICATION_COMPONENTS` into your component:

```ts
import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
  ],
})
export class CustomComponent {}
```

> **Deprecation notice:**
> 
> `DaffNotificationModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A notification is composed of a container with a title, message, and optional icon and actions:

```html
<daff-notification>
  <fa-icon daffPrefix></fa-icon>
  <div daffNotificationTitle>Notification title</div>
  <div daffNotificationMessage>Additional details about this notification.</div>
  <div daffNotificationActions>
    <button daff-button>Confirm</button>
    <button daff-button>Cancel</button>
  </div>
</daff-notification>
```

- **`<daff-notification>`**: The wrapper component that contains all notification content.
- **`[daffPrefix]`**: A decorative icon that provides a quick visual cue about the notification's purpose.
- **`[daffNotificationTitle]`**: The primary text summarizing the notification.
- **`[daffNotificationMessage]`**: Additional details or context. Keep this brief—ideally one to two short sentences.
- **`[daffNotificationActions]`**: Actionable buttons related to the notification (e.g. dismiss, navigate). A maximum of two buttons is recommended to keep the notification concise.

## Features

### Status
Use the `status` property to visually differentiate between notification types such as `info`, `warn`, `critical`, or `success`.

<daff-docs-example-viewer example="notification-status"></daff-docs-example-viewer>

### Orientation
Use the `orientation` property to stack notification content either `vertical` (default) or `horizontal`.

<daff-docs-example-viewer example="notification-orientations"></daff-docs-example-viewer>

### Dismissable notification
Notifications are persistent by default. To display a close button, set the `dismissible` property to `true`.

> Avoid making critical notifications dismissible to ensure users can read or interact with the necessary information.

<daff-docs-example-viewer example="dismissible-notification"></daff-docs-example-viewer>

## Accessibility

### Built-in behavior
- Notifications with `critical` or `warn` status use `role="alert"` for immediate announcement by assistive technologies, while all other notifications use `role="status"` for non-interruptive announcements. See [live region roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#4._live_region_roles) for more information.
- Notifications include `tabindex="0"` so they can be discovered by keyboard users.