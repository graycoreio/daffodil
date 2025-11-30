/**
 * Copyright © Graycore. All rights reserved.
 */
var config = {
    map: {
        '*': {
            aiSchemaRenderer: 'Graycore_CmsAiBuilder/js/angular-web-component-loader'
        }
    },
    config: {
        mixins: {
            'Graycore_CmsAiBuilder/js/form/ai-builder': {
                'Graycore_CmsAiBuilder/js/form/ai-builder-mixin': true
            }
        }
    }
};
