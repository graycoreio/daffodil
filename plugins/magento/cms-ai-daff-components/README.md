<p align="center">
  <img src="https://raw.githubusercontent.com/graycoreio/daffodil/develop/apps/daffio/src/assets/appicons/icon-384x384.png" alt="daffodil-logo" width="120px" height="120px"/>
</p>

<p align="center">
  <a href="https://www.daff.io/"><strong>daff.io</strong></a>
  |
  <a href="https://discord.gg/BdaJVZ53sR"><strong>Discord</strong></a>
</p>

# Magento 2 CMS AI Daffodil Components

This module extends `Graycore_CmsAiBuilder` with [`@daffodil/design`](https://github.com/graycoreio/daffodil) components.

**Use this module if** your storefront uses both [Daffodil](https://github.com/graycoreio/daffodil) and the [`@daffodil/design`](https://next.daff.io/docs/design) component library

> [!IMPORTANT]  
> If you are using Daffodil, but are not using `@daffodil/design`, see [custom storefronts](#custom-storefronts).

## What This Module Does

1. **Registers Daffodil component schemas** with the AI CMS Builder, enabling the LLM to generate content using Daffodil components (Hero, Card, Callout, Accordion, etc.)
2. **Provides custom editor and renderer builds** that include the Daffodil component library, replacing the `Graycore_CmsAiBuilder`'s default editor/renderer

## Custom Storefronts

If you have built your own Daffodil storefront with custom components, you should create your own version of this module. Use this module as a reference for:

- Registering your component schemas in `etc/di.xml`
- Building custom editor/renderer apps with your components
- Configuring the module via `etc/config.xml`
