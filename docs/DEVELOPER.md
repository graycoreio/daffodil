# Developer Documentation

## Contributing
Please read the [contributing guidelines here](https://github.com/graycoreio/daffodil/blob/develop/CONTRIBUTING.md).

## Build
We currently utilize [Lerna](https://github.com/lerna/lerna) along with the [Angular CLI](https://cli.angular.io/) to run our builds. You can run a full build that builds all projects via:

```
lerna run build
```

If you want to build a single project or library, you can run
```
ng build libName
ng build appName

e.g.
ng build core
```

This will output build artifacts into the `dist` directory.

## Running unit tests
Much like builds, we utilize Lerna, and the Angular CLI to run our tests.

To run the full suite
```
lerna run test
```

If you want to run a single project or library's test suite
```
ng test libName
ng test appName
```

## Reference
You can read more about each library and it's build/testing process in the readme of the relevant library or app.

### Apps
* [daff.io](../apps/daffio/README.md)
* [foundation-demo](../apps/daffio/README.md)

### Libraries
* [core](../libs/core/README.md)
* [state](../libs/state/README.md)
* [drivers](../libs/drivers/README.md)
* [design](../libs/design/README.md)