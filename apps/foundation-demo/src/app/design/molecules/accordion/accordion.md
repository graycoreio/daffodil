# Accordion Component

The accordion component is a useful component when you're trying to display chunks
of content in a compact fashion.

The accordion consists of a global `<accordion>` parent with children `<accordion-item>`s.

## Usage

```html
<accordion>
    <accordion-item initiallyActive="true">
        <h2 accordion-item-title>Details</h2>
        <div panel-title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo 
            lacus ut sapien consectetur, et ultricies leo rutrum. Integer iaculis ultrices nunc, 
            et maximus quam efficitur sed. Maecenas iaculis nisl neque, maximus sagittis libero sagittis eget.
            <a>Learn More.</a>
        </div>
    </accordion-item>
    <accordion-item>
        <h2 accordion-item-title>Size and Fit</h2>
        <div panel-title>no content</div>
    </accordion-item>
    <accordion-item>
        <h2 accordion-item-title>Shipping and Returns</h2>
        <div panel-title>no content</div>
    </accordion-item>
    <accordion-item>
        <h2 accordion-item-title>Reviews</h2>
        <div panel-title>no content</div>
    </accordion-item>
</accordion>
```