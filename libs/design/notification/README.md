# Notification
A notification provides contextual feedback or information related to user actions within a page's content.

## Overview
Notifications display short messages that are closely associated with nearby content or actions. They're commonly used to confirm actions, display warnings, or provide contextual information within a specific area of the page.

Notifications should not be used to display app-level alerts. For global messages, use the [Toast](/libs/design/toast/README.md) component.

<design-land-example-viewer-container example="default-notification"></design-land-example-viewer-container>

## Best practices

**When to use**
- Confirming user actions within a specific page area
- Displaying warnings or alerts related to nearby content
- Providing contextual feedback for forms or operations

## Usage

### Within a standalone component
To use notification in a standalone component, import `DAFF_NOTIFICATION_COMPONENTS` directly into your custom component:

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

### Within a module (deprecated)
To use notification in a module, import `DaffNotificationModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffNotificationModule } from '@daffodil/design/notification';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffNotificationModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy
A notification consists of the following components, displayed in the order listed:

### Container
**`<daff-notification>`**: The wrapper component that contains all notification content.

### Icon
Use the `[daffPrefix]` element to add a decorative icon that provides a quick visual cue about the notification's purpose.

### Title
**`[daffNotificationTitle]`**: The primary text summarizing the notification.

### Message
**`[daffNotificationMessage]`**: Provides additional details or context. Keep this brief—ideally one to two short sentences.

### Actions
**`[daffNotificationActions]`**: Include actionable buttons related to the notification (e.g., dismiss, navigate). A maximum of two buttons is recommended to keep the notification concise.

### Basic structure
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

## Features

### Status
Use the `status` property to visually differentiate between notification types such as `info`, `warn`, `critical`, or `success`.

<design-land-example-viewer-container example="notification-status"></design-land-example-viewer-container>

### Orientation
Use the `orientation` property to stack notification content either `vertical` (default) or `horizontal`.

<design-land-example-viewer-container example="notification-orientations"></design-land-example-viewer-container>

### Dismissing a notification
Notifications are persistent by default. To display a close button, set the `dismissible` property to `true`.

> Avoid making critical notifications dismissible to ensure users can read or interact with the necessary information.

<design-land-example-viewer-container example="dismissible-notification"></design-land-example-viewer-container>

## Accessibility
**Live region roles:**
- Notifications with `critical` or `warn` status use `role="alert"` for immediate announcement by assistive technologies.
- All other notifications use `role="status"` for non-interruptive announcements.

See [live region roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#4._live_region_roles) for more information.

**Keyboard focus:**
- Notifications include `tabindex="0"` so they can be discovered by keyboard users.