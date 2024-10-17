# Getting Started
## Installation
Daffodil packages are provided a la carte. Each package provides a particular feature and must be installed separately. The following example demonstrates how to install the product package with `npm`.

```sh
npm install --save @daffodil/product
```

## Usage
The first step is to choose a driver that corresponds to the platform of choice. Daffodil provides lightweight in-memory API drivers to mock out a test platform for rapid frontend development.
<!--- TODO: add link to in-memory explanation --->
Once a platform has been chosen, import the corresponding driver module:

```ts
import {DaffProductInMemoryDriverModule} from '@daffodil/product/driver/in-memory'

@NgModule({
  imports: [
    DaffProductInMemoryDriverModule.forRoot()
  ]
})
class AppModule {}
```

Interacting with a given platform through Daffodil can be done in a couple of ways. The simplest, and recommended, way is through state.

### State
Interaction with the platform is done by dispatching actions and reading data from facades. Daffodil state packages track the loading state of each operation and store the results and/or errors in redux state.

<!--- TODO: add link to simple state example --->
