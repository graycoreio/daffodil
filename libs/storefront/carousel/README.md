# Carousel
Carousel is a slideshow component for cycling through a series of content.

## Overview
Carousel uses [Swiper](https://swiperjs.com) under the hood. For complete API documentation, refer to the Swiper documentation. Some inputs have been limited to provide better control over the user interface and keep the carousel's API smaller.

## Usage
To use carousel, import `DAFF_CAROUSEL_COMPONENTS` into your custom component:

```ts
import { DAFF_CAROUSEL_COMPONENTS } from '@daffodil/storefront/carousel';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_CAROUSEL_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Implementation
The carousel uses [Swiper](https://swiperjs.com) under the hood. For complete API documentation, refer to the Swiper documentation. Some inputs have been limited to provide better control over the UI and keep the carousel's API smaller.

### Basic structure
```html
<daff-sf-carousel>
	<ng-template daffSfCarouselItem *ngFor="let slide of [1,2,3,4,5,6]">
		<daff-card class="docs-card">
			<div daffCardHeader>Header {{slide}}</div>
			<div daffCardTitle>Title</div>
			<div daffCardContent>
				<p>Card content text that is relevant to the title and builds context about an image that may be added
					to the card.</p>
				<p>Card content with multiple paragraphs.</p>
			</div>
			<div daffCardActions>
				<button daff-button type="button" color="primary">Button Text {{slide}}</button>
			</div>
		</daff-card>
	</ng-template>
</daff-sf-carousel>
```

## Accessibility
Carousel implements Swiper's keyboard support to provide previous and next controls via the arrow keys. It also includes accessibility roles and labels, and touch support for swiping left and right.