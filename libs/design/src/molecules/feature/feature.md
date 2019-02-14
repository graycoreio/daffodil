# Feature Component
The `feature` component can be used to display feature-related content on a page.

## Supported Content Types
A `daff-feature` transcludes:
* `[daffFeatureIcon]`
* `[daffFeatureSubheader]`
* `[daffFeatureTitle]`
* `[daffFeatureSubtitle]`
* Any additional components

### Icon
* Feature icon is used by adding `[daffFeatureIcon]` to any tag.

### Subheader
* Feature subheader is used by adding `[daffFeatureSubheader]` to any tag.

### Title
* Feature title is used by adding `[daffFeatureTitle]` to any tag.

### Subtitle
* Feature subtitle is used by adding `[daffFeatureSubtitle]` to any tag.

## Modes
* To define a feature mode, add `mode="[value]"` to the `<daff-feature>` tag.
* The default mode is `normal`
* Values: `compact` and `normal`

### Usage
```
<daff-feature mode="compact">
  <img daffFeatureIcon src="" />
  <p daffFeatureSubheader>Subheader</p>
  <h4 daffFeatureTitle>Title</h4>
  <p daffFeatureSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  Some other content
</daff-feature>
```