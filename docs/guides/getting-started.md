# Getting Started

This guide covers installing a small sample of Daffodil's components into a new or existing Angular application. Daffodil enables you to build storefronts without immediately connecting to a platform. Start developing without committing to a specific ecommerce backend.

## Demo

[View the live demo](https://demo.daff.io) to see Daffodil in action.

## Set up a new project locally

If you're starting a new storefront, you'll most likely want to create a local project so that you can use tooling such as [Git](https://git-scm.com/).

### Prerequisites

- [Node.js](https://angular.dev/reference/versions)
- [Angular 19](https://angular.dev/installation)
- Text editor — We recommend [Visual Studio Code](https://code.visualstudio.com/)
- Terminal — Required for Angular CLI commands

### Create a new Angular project

Create a new Angular project with your desired project name:

```bash
npx @angular/cli@19 new my-project
```

If you don't have any preferences, just hit the enter key to take the default options and continue with the setup.

In your terminal, switch to your new Angular project:

```bash
cd my-project
```

### Install Daffodil

Daffodil requires no server-side components by default. Simply install the commerce package to get up and running quickly:

```bash
npx ng add @daffodil/commerce
```

### Run your new project locally
All dependencies should be installed at this point, so you can start your project by running the command:

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

Visit the path in `Local` (e.g., http://localhost:4200) to see your application.

## Next steps

- [Understanding drivers](./essentials/drivers): Learn how drivers abstract platform differences
- [Browse packages](/docs/packages): Add features to your store
- [Get help on Discord](https://discord.gg/BdaJVZ53sR): Ask questions in the help channel
