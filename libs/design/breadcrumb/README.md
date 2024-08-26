# Breadcrumb
Breadcrumbs are a secondary navigation that displays a user's location within a website or application.

## Overview
Breadcrumbs are a visual representation of the site's navigational hierarchy. They indicate the current page's location and allows users to easily move up to a parent level. It's required for breadcrumbs to be used with the native HTML `<ol>` element, and for each item to be an `<li>`. This offers additional context for assistive technology.

# Basic Breadcrumb
<design-land-example-viewer-container example="basic-breadcrumb"></design-land-example-viewer-container>

## Accessibility
Breadcrumbs should be wrapped in a native HTML `<nav>` element so that assistive technologies can present the breadcrumbs as a navigational element on the page. Use `aria-label="Breadcrumbs"` on the `nav` element to provide more context. `aria-current="page"` is added to a breadcrumb item when it's the current page, and `aria-current="false"` on all other items.