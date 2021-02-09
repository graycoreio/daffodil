# Card Component

The `<daff-card>` component is a content container that supports multiple content types used in the context of a single subject.

## Supported Content Types

A `<daff-card>` transcludes:

- `[daffCardImage]`
- `[daffCardTitle]`
- Any additional text and components

### Image

- Card image is used by adding `[daffFeatureImage]` to an `<img>` tag.

### Title

- Card title is used by adding `[daffCardTitle]` to any tag.

### Usage

```
<daff-card>
  <img daffCardImage src="#" />
  <h4 daffCardTitle>Title</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</daff-card>
```
