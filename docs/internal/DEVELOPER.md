# Developer Documentation

## Contributing
Please read the [contributing guidelines here](https://github.com/graycoreio/daffodil/blob/develop/CONTRIBUTING.md).

## Building the Project
### Prerequisites
* [Node](https://nodejs.org)
* [Git](https://git-scm.com/)

## Creating Your Own Fork
[Fork the Daffodil Repository](https://github.com/graycoreio/daffodil/fork)

![GitHub Fork Button](./assets/daff-fork.jpg "Fork Daffodil")

## Clone your repository
```bash
git clone git@github.com:{username}/daffodil.git && cd daffodil
git checkout -b new-branch
```

### Installing Dependencies
```bash
npm ci
```
> Don't run `npm install` as that will modify the `package-lock.json` file.

### Full Build
You can run a full build that builds all projects and libraries via:

```bash
npx nx run-many -t build
```

### Partial Build
If you want to build a single project or library, you can run:

```bash
npx nx run @daffodil/[library/app]:build
```

For example,

```bash
npx nx run @daffodil/core:build
```

### Build Cache
Nx caches the results of `build`, `test` and `lint` locally, so repeating a task with unchanged inputs is instant. `npx nx reset` clears it.

#### Shared remote cache (maintainers)
The [@graycore/nx-remote-cache](https://github.com/graycoreio/nx-remote-cache) plugin (configured in `nx.json`) gives Nx a shared remote cache. 

To use the shared remote cache, you must have [`az`](https://learn.microsoft.com/cli/azure/install-azure-cli) installed and you must run `az login`.

Without an `az login` (or without a role on the container), Nx runs with only its local cache, exactly as before.

To check whether you're connected, and with what access:

```bash
npx nx @graycore/nx-remote-cache
```

To turn the remote cache off, set `NX_REMOTE_CACHE=off` (e.g. in a git-ignored `.env` at the repository root), then run `npx nx daemon --stop`.

## Running unit tests
Much like builds, we utilize Lerna and the Angular CLI to run our tests.

### Full Test Suite
To run the full suite

```bash
npx nx run-many -t test
```

### Partial Test Suite
If you want to run a single project or library's test suite

```bash
npx ng test [libName/appName]
```

## Reference
You can read more about each library and it's build/testing process in the readme of the relevant library or app.

### Apps
* [daff.io](../../apps/daffio/README.md)
* [demo](../../apps/demo/README.md)

### Libraries
* [core](../../libs/core/README.md)
* [checkout](../../libs/checkout/README.md)
* [cart](../../libs/cart/README.md)
* [drivers](../../libs/drivers/README.md)
* [design](../../libs/design/README.md)
* [product](../../libs/product/README.md)
