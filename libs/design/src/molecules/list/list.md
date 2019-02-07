# List Component
The `list` component can be used to display a series of line items.

## Basic List
* Consists of multiple `daff-list-item`s

### Usage
```
<daff-list>
  <h3 daffListSubheader>Lorem Ipsum</h3>
  <daff-list-item>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</daff-list-item>
  <daff-list-item>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</daff-list-item>
  <daff-list-item>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</daff-list-item>
</daff-list>
```

## Link List
* `type="link"` is used for navigation lists

### Usage
```
<daff-list type="link">
  <h3 daffListSubheader>List Subheader</h3>
  <daff-list-item><a href="#">List Item</a></daff-list-item>
  <daff-list-item><a href="#">List Item</a></daff-list-item>
  <daff-list-item><a href="#">List Item</a></daff-list-item>
  <daff-list-item><a href="#">List Item</a></daff-list-item>
  <daff-list-item><a href="#">List Item</a></daff-list-item>
</daff-list>
```

## Multi-line List
* `type="multi-line"` allows you to have multiple lines per `daff-list-item`. 

### Usage
```
<daff-list type="multi-line">
  <daff-list-item>
    <h4>Lorem ipsum</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula lacinia tellus quis bibendum.</p>
  </daff-list-item>
  <daff-list-item>
    <h4>Lorem ipsum</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula lacinia tellus quis bibendum.</p>
  </daff-list-item>
  <daff-list-item>
    <h4>Lorem ipsum</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula lacinia tellus quis bibendum.</p>
  </daff-list-item>
</daff-list>
```

## Icon List
* `[daffListItemIcon]` allows you to add an icon to your list item.
* Add the attribute `[daffListItemIcon]` to any element.

### Usage
```
<daff-list>
  <daff-list-item>
    <i class="fab fa-twitter" daffListItemIcon></i>
    <h4>Lorem ipsum</h4>
  </daff-list-item>
</daff-list>
```
