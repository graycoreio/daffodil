# Accordion
An accordion is a group of vertically stacked headings used to toggle the visibility of a section of content.

## Overview
Accordions are made up of `<daff-accordion-item>`s that can be expanded or collapsed to display large amounts of information. Accordions are helpful to shorten pages and reduce scrolling by hiding content that's not crucial to display at all times.

## Supported Content Types
An accordion item can include a `[daffAccordionItemTitle]`, which provides a high level overview of the content. Any other content within an accordion item will be displayed as the primary content.

By default, the accordion item includes a toggle icon at the end of the header to indicate if it's expanded or collapsed.

### Setting an item to be expanded by default 
An item content can be visibile on render by setting the `initiallyExpanded` property to `true` on `daff-accordion-item`.

## Usage

### Basic Accordion
<design-land-example-viewer-container example="basic-accordion"></design-land-example-viewer-container>