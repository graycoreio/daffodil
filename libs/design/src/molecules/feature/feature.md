# Feature Component
The `feature` component can be used to display feature-related content on a page.

## Supported Content Types
A `daff-feature` transcludes:
* `[daff-feature-title]`
* `[daff-feature-body]`
* `[daff-feature-icon]`
* Any additional components

### Title
* Feature title is used by adding `[daff-feature-title]` to any tag.

### Body
* Feature body is used by adding `[daff-feature-body]` to any tag.

### Icon
* Feature icon is used by adding `[daff-feature-icon]` to any tag.

### Usage
```
<daff-feature>
  <img daff-feature-icon src="" />
  <h4 daff-feature-title>Title</h4>
  <p daff-feature-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  Some other content
</daff-feature>
```