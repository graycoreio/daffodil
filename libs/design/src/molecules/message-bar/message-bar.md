# Message Bar
The `DaffMessageBarComponent` provides a way to display contextual information for user actions or system updates. Message bars should be placed near the top of the relevant view.

## Accessibility
- All message bars have an `aria-live` attribute set to `polite`. This allows the content of a message bar to be announced by assistive technology when it shown or updated.
- Message bars have a `tabindex=0` to allow users to focus on a message bar while tabbing through the page.
