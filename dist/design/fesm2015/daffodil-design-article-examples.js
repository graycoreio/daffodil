import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffArticleModule } from '@daffodil/design';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleHeadingsComponent {
}
ArticleHeadingsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-headings',
                template: "<daff-article>\n  <h1>This is a h1 heading.</h1>\n  <h2>This is a h2 heading.</h2>\n  <h3>This is a h3 heading.</h3>\n  <h4>This is a h4 heading.</h4>\n  <h5>This is a h5 heading.</h5>\n  <h6>This is a h6 heading.</h6>\n</daff-article>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleCodeInlineComponent {
}
ArticleCodeInlineComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-code-inline',
                template: "<daff-article>\n  <p>We could be discussing <code>functions</code> or <code>types</code>, but we should indicate the difference between these elements and regular text!</p>\n</daff-article>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleHrComponent {
}
ArticleHrComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-hr',
                template: "<daff-article>\n  <hr>\n</daff-article>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleOlComponent {
}
ArticleOlComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-ol',
                template: "<daff-article>\n  <ol>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n  </ol>\n</daff-article>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleUlComponent {
}
ArticleUlComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-ul',
                template: "<daff-article>\n  <ul>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n  </ul>\n</daff-article>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleMetaComponent {
}
ArticleMetaComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-meta',
                template: "<daff-article>\n  <p daffArticleMeta>Some interesting information about an article</p>\n</daff-article>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleLinkComponent {
}
ArticleLinkComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-link',
                template: "<daff-article>\n  <a href=\"#\">This is a link.</a>\n</daff-article>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleLeadComponent {
}
ArticleLeadComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-lead',
                template: "<daff-article>\n  <p daffArticleLead>An example `daffArticleLead`</p>\n</daff-article>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleBlockquoteComponent {
}
ArticleBlockquoteComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-blockquote',
                template: "<daff-article>\n  <blockquote>\n    This is a blockquote. This can be used for customer testimonals, document references, etc.\n    <cite>Name your quote source here.</cite>\n  </blockquote>\n</daff-article>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleCodeBlockComponent {
}
ArticleCodeBlockComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'article-code-block',
                template: "<daff-article>\n  <pre><code>\n    This is a line of code.\n    This is another line of code.\n  </code></pre>\n</daff-article>\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ARTICLE_EXAMPLES = [
    ArticleBlockquoteComponent,
    ArticleCodeBlockComponent,
    ArticleCodeInlineComponent,
    ArticleHeadingsComponent,
    ArticleHrComponent,
    ArticleLeadComponent,
    ArticleLinkComponent,
    ArticleMetaComponent,
    ArticleOlComponent,
    ArticleUlComponent
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArticleExamplesModule {
}
ArticleExamplesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...ARTICLE_EXAMPLES
                ],
                imports: [
                    CommonModule,
                    DaffArticleModule
                ],
                entryComponents: [
                    ...ARTICLE_EXAMPLES
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ARTICLE_EXAMPLES, ArticleBlockquoteComponent, ArticleCodeInlineComponent, ArticleExamplesModule, ArticleHeadingsComponent, ArticleHrComponent, ArticleLeadComponent, ArticleLinkComponent, ArticleMetaComponent, ArticleOlComponent, ArticleUlComponent, ArticleCodeBlockComponent as ɵa };
//# sourceMappingURL=daffodil-design-article-examples.js.map
