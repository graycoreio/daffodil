# Feature Component
The `feature` component can be used to display feature-related content on a page.

## Supported Content Types
A `daff-feature` transcludes:
* `[daffFeatureTitle]`
* `[daffFeatureSubtitle]`
* `[daffFeatureIcon]`
* Any additional components

### Title
* Feature title is used by adding `[daffFeatureTitle]` to any tag.

### Subtitle
* Feature subtitle is used by adding `[daffFeatureSubtitle]` to any tag.

### Icon
* Feature icon is used by adding `[daffFeatureIcon]` to any tag.

### Usage
```
<daff-feature>
  <img daffFeatureIcon src="" />
  <h4 daffFeatureTitle>Title</h4>
  <p daffFeatureSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  Some other content
</daff-feature>
```