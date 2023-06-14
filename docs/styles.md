
## Child Component outer Padding/Margin

It's always a good idea to keep child components as modular as possible so they can be reused in different contexts. By having the parent component define the spacing between its child components, you can ensure that the child components will maintain their intended layout regardless of where they are used. This can also help to reduce the amount of CSS code needed to style the child components, making your code more efficient and easier to maintain.

### Here's an example of how you might structure the HTML and CSS for a parent component and its child components:

``` html 
<div class="parent-component">
  <div class="child-component">Child Component 1</div>
  <div class="child-component">Child Component 2</div>
  <div class="child-component">Child Component 3</div>
</div>
```

``` CSS

.parent-component {
  padding: 20px;
  margin: 10px;
}

.child-component {
  background-color: #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

```

 In this example, the parent component defines the padding and margin for all of its child components. Each child component only defines its own internal padding and margin. This allows the child components to be reused in other parts of the app without having to worry about their outer spacing.
















