# Accordion Component

The accordion component is a useful component when you're trying to display chunks of content in a compact fashion.

The accordion consists of a global `<daff-accordion>` parent with children `<daff-accordion-item>`s.

## Usage

```
<daff-accordion>
    <daff-accordion-item initiallyActive="true">
        <h3 daff-accordion-item-title>Details</h3>
        <div daff-accordion-item-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo 
            lacus ut sapien consectetur, et ultricies leo rutrum. Integer iaculis ultrices nunc, 
            et maximus quam efficitur sed. Maecenas iaculis nisl neque, maximus sagittis libero sagittis eget.
            <a>Learn More.</a>
        </div>
    </daff-accordion-item>
</daff-accordion>
```