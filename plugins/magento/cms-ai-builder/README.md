# Graycore AI CMS Builder

A Magento 2 module that extends the CMS page editor with AI-powered content generation and visual preview capabilities.

> [!IMPORTANT]  
> This does not allow you to change the content in Luma/Hyva/Native Magento theme. Do not expect to just open up a page in the admin panel, generate a result, hit save, and expect to go to your Magento frontend and see what the model generated. This extension generates a new schema property `ai_schema_json` that's available on given page. This schema will need to be converted into an associated Magento template. I don't use Luma/Hyva/Native Magento frontend, so someone else will have to tackle this task.
> HELP IS WANTED HERE. I WANT TO SUPPORT THIS, BUT I DONT HAVE THE TIME TO BUILD THIS.

![An image of the editor in the Magento admin panel](guides/assets/editor-in-ui.webp)

<p align="center">
  <a href="https://www.daff.io/"><strong>daff.io</strong></a>
  | 
  <a href="https://www.youtube.com/watch?v=LcudrwsT_gk"><strong>Youtube Demo</strong></a>
  | 
  <a href="https://www.youtube.com/watch?v=LcudrwsT_gk"><strong>Daffodil Demo</strong></a>
</p>

> [!WARNING]
> **This package is highly experimental and NOT production-ready.**
>
> - Breaking changes may occur at any time without notice
> - API stability is not guaranteed
> - Data loss or corruption may occur
> - Security vulnerabilities may exist
> - No support or warranty is provided
>
> **Use at your own risk.** This package is intended for testing, evaluation, and development purposes only. Do not use in production environments or with critical data.

## Overview

This module adds an AI-powered visual editor to Magento 2's CMS pages, allowing content managers to:

- Generate page schemas from text prompts using OpenAI
- Preview content in real-time using an Angular-based renderer
- Store and serve dynamic content via GraphQL

## Features

- **AI Schema Generation**: Convert text prompts into structured component schemas using OpenAI GPT-4
- **Visual Editor**: Split-pane editor with prompt input and live preview
- **Component Registry**: Configurable component system for defining available UI components
- **GraphQL Integration**: Schemas automatically available via GraphQL for frontend consumption
- **Custom Element Support**: Preview uses Angular web components (custom elements)

## Installation

1. Download the package:
```bash
composer require graycore/magento2-cms-ai-builder
```

2. Configure the package:

3. Enable the module:
```bash
bin/magento module:enable Graycore_CmsAiBuilder
```

## Customizing the Editor

You can replace the default Angular editor with your own implementation by configuring custom script paths in your module's `etc/config.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <ai_cms_builder>
            <editor_customization>
                <custom_polyfills_script>Vendor_Module/js/custom-editor/polyfills.js</custom_polyfills_script>
                <custom_main_script>Vendor_Module/js/custom-editor/main.js</custom_main_script>
            </editor_customization>
        </ai_cms_builder>
    </default>
</config>
```

These scripts should be built as an Angular app following the documentation from the `@daffodil/content` admin editor guide (WIP).

## Known Problems

These are problems that I know exist, and would really love help with:

- [ ] The model's UI output is fairly bland and lacks context about the store.
- [ ] The model's responses are fairly slow (high latency)
- [ ] When I'm interacting with the model, if I cancel a request the whole UI freezes (this is a side effect of Magento's session-locking=, try `disable_locking`)
    - [ ] When I save a page while the model is responding, the UI waits to save until the model has finished its last response.
- [ ] This doesn't support the native Magento frontend, only GraphQl.
- [ ] The DB performance of the PageAiRepository is absolutely atrocious (like 15 reads and 2 saves per chat).
- [ ] It doesn't generate links, buttons, or forms fields. 
- [ ] The styles of the Magento admin panel bleed into the page's design.

## License

See [LICENSE](./LICENSE)