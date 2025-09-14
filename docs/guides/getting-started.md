# Getting started

Daffodil was developed so you can get started without connecting to a platform. This means that you can start building your storefront without even *knowing* which platform(s) you're ultimately going to use.

This guide will walk you through installing a small sample of Daffodil's components into a fresh or existing Angular application.

## Play around

If you'd just like to see what you're going to get at the end, [check out our demo](https://demo.daff.io)!.

## Set up a new project locally

To begin, if you're starting a new storefront, you'll most likely want to create a local project so that you can use tooling such as [`git`](https://git-scm.com/).


### Prerequisites

- [Node](https://angular.dev/reference/versions)
- [Angular 19](https://angular.dev/installation)
- Text editor - We recommend [Visual Studio Code](https://code.visualstudio.com/)
- Terminal - Required for running Angular CLI commands - We recommend using WSL on Windows, but you can use Powershell too.



## Setting up Angular

We'll start by setting up [Angular](https://angular.dev/). [You can follow along with the Angular guide to set up Angular](https://angular.dev/installation#instructions), or you can use this abbreviated guide:

```bash
# You can accept all the default settings.
npx @angular/cli@19 new my-project 

cd my-project
```

## Setting up Daffodil

Since Daffodil requires no server-side components by default, you can simply install the `@daffodil/commerce` package to get up and running quickly.

```bash
## You can accept the default selected
npx ng add @daffodil/commerce
```

## Running your project

All of your dependencies should be installed at this point (which you can verify by checking for the existence of a node_modules folder in your project), so you can start your project by running the command:

```bash
npm start
```

If everything is successful, you should see a similar confirmation message in your terminal:

```bash
Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
 ➜ Local: http://localhost:4200/
 ➜ press h + enter to show help
```

And now you can visit the path in `Local` (e.g., http://localhost:4200) to see your application.


## Next Steps

Now that you've created your Angular app, installed Daffodil, and started your application, you're free to explore the Daffodil ecosystem. If you want to get a deeper understanding of what a driver is, browse the [driver](./drivers) guide. If you want to add additional features to your store, take a look at our [package list](/docs/packages) to see what features we offer. If you're lost, feel free to ask a question in the [`help` channel on Discord](https://discord.gg/BdaJVZ53sR).









