# Notification
Notifications provide contextual feedback or information related to user actions within a page's content.

## Overview
Notifications are used to display short messages that are closely associated with nearby content or actions. They're often used to confirm an action, display warnings, or provide contextual information.

Notifications should not be used to display app-level alerts. For global messages, use the [Toast](/libs/design/toast/README.md) component.

<design-land-example-viewer-container example="default-notification"></design-land-example-viewer-container>

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
A notification is composed of the following, projected in the order listed:

**Icon**\
Use the `[daffPrefix]` selector to add a decorative icon that provides a quick visual cue about the notification’s purpose.

**Title**\
The primary text summarizing the notification. Use the `[daffNotificationTitle]` selector.

**Message**\
Provides additional details or context. Use the `[daffNotificationMessage]` selector. Keep this brief—ideally one to two short sentences.

**Actions**\
Include actionable buttons related to the notification (e.g., dismiss, navigate) by using the `[daffNotificationActions]` selector. **A maximum of two buttons is recommended** to keep the notification concise.

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

## Status
Use the `status` property to visually differentiate between notification types such as `info`, `warn`, `critical`, or `success`.

<design-land-example-viewer-container example="notification-status"></design-land-example-viewer-container>

## Orientation
Use the `orientation` property to stack notification content either `vertical` (default) or `horizontal`.

<design-land-example-viewer-container example="notification-orientations"></design-land-example-viewer-container>

## Dismissing a notification
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