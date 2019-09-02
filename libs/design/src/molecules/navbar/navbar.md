# Navbar

The navbar is a basic element container that will align the elements horizontally within the container. It utilizes display:flex and expects that its direct children will take advantage of the flexbox model to place themselves.

## Import 
Import the `DaffNavbarModule` from `@daffodil/design` inside of your `AppModule`;

```typescript
import { DaffNavbarModule } from '@daffodil/design";
```
Next add the `DaffNavbarModule` to your `imports` array inside of your `AppModule`.

```typescript
@NgModule({
  declarations: [
  ],
  imports: [
    DaffNavbarModule,
  ]
})
```


## Usage 

`<daff-navbar>` is the template used for the navbar

### Basic Usage Example
``` html
<daff-navbar>
    <button>Button</button>
</daff-navbar>
```