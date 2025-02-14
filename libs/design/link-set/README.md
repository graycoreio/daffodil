# Link Set
Link set is a component for displaying two or more link set items.

## Usage

### Within a standalone component
To use link set in a standalone component, import `DAFF_LINK_SET_COMPONENTS` directly into your custom component:

```ts
import { DAFF_LINK_SET_COMPONENTS } from '@daffodil/design/link-set';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_LINK_SET_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use link set in a module, import `DaffLinkSetModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffLinkSetModule } from '@daffodil/design/link-set';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffLinkSetModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Supported Content Types
A `<daff-link-set>` transcludes:
* `[daffLinkSetHeading]`
* `[daffLinkSetSubheading]`
* `[daff-link-set-item]` component

### Heading
A link set heading is used by adding `[daffLinkSetHeading]` to any tag. This is used to define the heading of a top level link set.

### Subheading
A link set subheading is used by adding `[daffLinkSetSubheading]` to any tag. This is helpful to define the heading of a nested link set that is not actionable.

### Styling links within a link set
Use the `[daff-link-set-item]` component to style links within a link set.

### Example
```
<h4>Default Link Set</h4>
<daff-link-set class="docs-link-set">
  <a href="#" daff-link-set-item daffLinkSetHeading>Link Set Heading</a>
  <a href="#" daff-link-set-item>Link</a>
  <a href="#" daff-link-set-item>Link</a>
  <a href="#" daff-link-set-item>Link</a>
</daff-link-set>

<h4>Nested Link Set</h4>
<daff-link-set>
  <a href="#" daff-link-set-item daffLinkSetHeading>Link Set Heading</a>
  <a href="#" daff-link-set-item>Link</a>
  <div daffLinkSetSubheading>Link Set Subheading</div>
  <daff-link-set>
    <a href="#" daff-link-set-item>Link</a>
    <a href="#" daff-link-set-item>Link</a>
    <a href="#" daff-link-set-item>Link</a>
    <a href="#" daff-link-set-item>Link</a>
  </daff-link-set>
  <a href="#" daff-link-set-item>Link</a>
  <a href="#" daff-link-set-item>Link</a>
  <a href="#" daff-link-set-item>Link</a>
</daff-link-set>
```
