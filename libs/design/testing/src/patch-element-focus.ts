/**
 * Replaces the element's native focus/blur methods with ones that dispatch the corresponding events directly,
 * so tests do not depend on the document actually having focus. Chrome only
 * moves `document.activeElement` without firing focus events when the document
 * is unfocused, which makes native-focus-driven tests order-dependent.
 *
 * This originally comes from https://github.com/angular/components/blob/7d09f9153fabfe4cdd13a096d9e6d43f472812e5/src/cdk/testing/testbed/fake-events/element-focus.ts#L30
 */
export function patchElementFocus(element: HTMLElement): void {
  element.focus = () => element.dispatchEvent(new Event('focus'));
  element.blur = () => element.dispatchEvent(new Event('blur'));
}
