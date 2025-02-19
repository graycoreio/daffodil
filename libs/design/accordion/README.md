# Accordion
An accordion is a group of vertically stacked headings used to toggle the visibility of a section of content.

## Overview
Accordions are helpful to shorten pages and reduce scrolling by hiding content that's not crucial to display at all times. The accordion component consists of several pre-styled components and directives.

<design-land-example-viewer-container example="basic-accordion"></design-land-example-viewer-container>

## Usage
```ts
import { DAFF_ACCORDION_COMPONENTS } from '@daffodil/design/accordion';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_ACCORDION_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Anatomy
- **Accordion**: a wrapper for grouping accordion items.
- **Accordion Item**: the wrapper for the title and content. It handles the expansion and collapse of the inner content when clicked.
- **Accordion Item Title**: used to provide a high level overview of the content.

Any additional content placed inside of an accordion item will be displayed as part of the collapsible content. 

```html
<daff-accordion>
	<daff-accordion-item>
		<div daffAccordionItemTitle></div>
    <p>Item Content</p>
	</daff-accordion-item>
	<daff-accordion-item>
		<div daffAccordionItemTitle></div>
    <p>Item Content</p>
	</daff-accordion-item>
</daff-accordion>
```

## Examples

### Expand an item by default
Use the `initiallyExpanded` property on the accordion item to have it opened by default.

```html
<daff-accordion-item [initiallyExpanded]="true"></daff-accordion-item>
```

### Disable an item
Use the `disabled` property on the accordion item to prevent it from being expanded or collapsed.

```html
<daff-accordion-item [disabled]="true"></daff-accordion-item>
```

## Accessibility
Accordion follows the to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).