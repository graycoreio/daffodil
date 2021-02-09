# Navbar
The navbar is a basic element container that will align the elements horizontally within the container. It utilizes `display: flex;` and expects that its direct children will take advantage of the flexbox model to place themselves.

## Import 
1. Import the `DaffNavbarModule` from `@daffodil/design` inside of your `AppModule`;

```typescript
import { DaffNavbarModule } from '@daffodil/design';
```

2. Add the `DaffNavbarModule` to your `imports` array inside of your `AppModule`.

```typescript
@NgModule({
  declarations: [
  ],
  imports: [
    DaffNavbarModule,
  ]
})
```

## Theming
The color of a navbar can be changed by using the `color` property. By default, the navbar uses the base color of the theme. This can be changed to one of the supported colors.
- Supported colors: `primary | secondary | tertiary | black | white`

## Usage 

`<daff-navbar>` is the template used for the navbar.

### Basic Usage Example
``` html
<daff-navbar>
  <button>Button</button>
</daff-navbar>
```