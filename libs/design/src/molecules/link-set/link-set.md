# Link Set
`<daff-link-set>` is a component for displaying two or more `[daff-link-set-item]`s. `<daff-link-set>`s can be nested.

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

### Usage
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
