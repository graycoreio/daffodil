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
Nx caches the results of `build`, `test` and `lint` locally, so repeating a task with unchanged inputs is instant. Nx 23 keeps this cache outside the repository (under `~/.nx/`); `npx nx reset` clears it.

#### Shared remote cache (maintainers)
Maintainers can also read from (and, if allowed, write to) the team's shared cache, by running an [nx-remote-cache](https://github.com/graycoreio/nx-remote-cache#local-instance-binary-or-docker) instance on their own machine. It talks to the cache storage with your own Azure login: whether you can write depends on the Azure role you've been given, not on anything in this repository.

1. Start a local instance, as described in nx-remote-cache's "Local instance" docs (Docker Compose or the binary).
2. Point Nx at it in a `.env` file at the repository root (it's git-ignored, and Nx loads it automatically):

```bash
NX_SELF_HOSTED_REMOTE_CACHE_SERVER=http://127.0.0.1:<port of your local instance>
NX_SELF_HOSTED_REMOTE_CACHE_ACCESS_TOKEN=<the token your local instance accepts>
```

With both set, Nx checks its local cache first, then the shared one, and stores what it builds in both. Anything else, e.g. contributors without access, works exactly as before: leave the variables unset and Nx only uses its local cache.

> If your local instance isn't running while these variables are set, Nx fails the run instead of falling back. Comment them out of `.env` when you stop the instance.

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
