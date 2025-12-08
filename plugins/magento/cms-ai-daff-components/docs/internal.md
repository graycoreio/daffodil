# Internal Documentation

## Rebuilding the Editor and Renderer

When the Angular `editor` or `renderer` apps are rebuilt, the output filenames contain hashes that change. You must update the following files to reference the new filenames.

### Files to Update

#### When rebuilding the **Editor**:

**`etc/config.xml`** - Update the script paths:
```xml
<custom_polyfills_script>Graycore_CmsAiDaffComponents/js/editor/browser/polyfills-XXXXXXXX.js</custom_polyfills_script>
<custom_main_script>Graycore_CmsAiDaffComponents/js/editor/browser/main-XXXXXXXX.js</custom_main_script>
```

**`Graycore_CmsAiBuilder::view/adminhtml/layout/cms_page_edit.xml`** - Update (and uncomment) the CSS path if your editor contains styles.
```xml
<!-- Currently active -->
<css src="Graycore_CmsAiBuilder::js/editor/browser/styles-XXXXXXXX.css"/>
```

#### When rebuilding the **Renderer**:

**`view/adminhtml/templates/renderer.phtml`** - Update all script references:
```php
$chunkPreloadJs = $block->getViewFileUrl('Graycore_CmsAiDaffComponents::js/renderer/browser/chunk-XXXXXXXX.js');
$polyfillsUrl = $block->getViewFileUrl('Graycore_CmsAiDaffComponents::js/renderer/browser/polyfills-XXXXXXXX.js');
$mainScriptUrl = $block->getViewFileUrl('Graycore_CmsAiDaffComponents::js/renderer/browser/main-XXXXXXXX.js');
```

**`view/adminhtml/layout/cmsaibuilder_renderer_index.xml`** - Update (and uncomment) the CSS path if your renderer contains styles.
```xml
<!-- <css src="Graycore_CmsAiDaffComponents::js/renderer/browser/styles-XXXXXXXX.css"/> -->
```

### Summary

| App | File to Update | What to Change |
|-----|----------------|----------------|
| Editor | `etc/config.xml` | `polyfills-*.js`, `main-*.js` |
| Editor | `Graycore_CmsAiBuilder::cms_page_edit.xml` | `styles-*.css` |
| Renderer | `view/adminhtml/templates/renderer.phtml` | `chunk-*.js`, `polyfills-*.js`, `main-*.js` |
| Renderer | `view/adminhtml/layout/cmsaibuilder_renderer_index.xml` | `styles-*.css` (commented) |

### Notes

- After updating, clear Magento's config cache: `bin/magento cache:clean config`