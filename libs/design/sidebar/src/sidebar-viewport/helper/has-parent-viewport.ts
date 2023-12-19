/**
 * Fallback function for determining whether or not a viewport has a parent viewport.
 * This is really only used in the Daffodil docs when the injector heirarchy
 * doesn't act as anticipated as a result of custom elements.
 */
export const hasParentViewport = (element: HTMLElement) => {
  let currentElement = element.parentElement;

  while (currentElement !== null) {
    if (currentElement.tagName === 'DAFF-SIDEBAR-VIEWPORT') {
      return true;
    }
    currentElement = currentElement.parentElement;
  }

  return false;
};
