import { Component, NgModule } from '@angular/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { DaffArticleModule } from '@daffodil/design';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleHeadingsComponent = /** @class */ (function () {
    function ArticleHeadingsComponent() {
    }
    ArticleHeadingsComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-headings',
                    template: "<daff-article>\n  <h1>This is a h1 heading.</h1>\n  <h2>This is a h2 heading.</h2>\n  <h3>This is a h3 heading.</h3>\n  <h4>This is a h4 heading.</h4>\n  <h5>This is a h5 heading.</h5>\n  <h6>This is a h6 heading.</h6>\n</daff-article>"
                }] }
    ];
    return ArticleHeadingsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleCodeInlineComponent = /** @class */ (function () {
    function ArticleCodeInlineComponent() {
    }
    ArticleCodeInlineComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-code-inline',
                    template: "<daff-article>\n  <p>We could be discussing <code>functions</code> or <code>types</code>, but we should indicate the difference between these elements and regular text!</p>\n</daff-article>"
                }] }
    ];
    return ArticleCodeInlineComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleHrComponent = /** @class */ (function () {
    function ArticleHrComponent() {
    }
    ArticleHrComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-hr',
                    template: "<daff-article>\n  <hr>\n</daff-article>"
                }] }
    ];
    return ArticleHrComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleOlComponent = /** @class */ (function () {
    function ArticleOlComponent() {
    }
    ArticleOlComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-ol',
                    template: "<daff-article>\n  <ol>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n    <li>This is an ordered list.</li>\n  </ol>\n</daff-article>"
                }] }
    ];
    return ArticleOlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleUlComponent = /** @class */ (function () {
    function ArticleUlComponent() {
    }
    ArticleUlComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-ul',
                    template: "<daff-article>\n  <ul>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n    <li>This is an unordered list.</li>\n  </ul>\n</daff-article>"
                }] }
    ];
    return ArticleUlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleMetaComponent = /** @class */ (function () {
    function ArticleMetaComponent() {
    }
    ArticleMetaComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-meta',
                    template: "<daff-article>\n  <p daffArticleMeta>Some interesting information about an article</p>\n</daff-article>"
                }] }
    ];
    return ArticleMetaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleLinkComponent = /** @class */ (function () {
    function ArticleLinkComponent() {
    }
    ArticleLinkComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-link',
                    template: "<daff-article>\n  <a href=\"#\">This is a link.</a>\n</daff-article>"
                }] }
    ];
    return ArticleLinkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleLeadComponent = /** @class */ (function () {
    function ArticleLeadComponent() {
    }
    ArticleLeadComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-lead',
                    template: "<daff-article>\n  <p daffArticleLead>An example `daffArticleLead`</p>\n</daff-article>"
                }] }
    ];
    return ArticleLeadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleBlockquoteComponent = /** @class */ (function () {
    function ArticleBlockquoteComponent() {
    }
    ArticleBlockquoteComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-blockquote',
                    template: "<daff-article>\n  <blockquote>\n    This is a blockquote. This can be used for customer testimonals, document references, etc.\n    <cite>Name your quote source here.</cite>\n  </blockquote>\n</daff-article>"
                }] }
    ];
    return ArticleBlockquoteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArticleCodeBlockComponent = /** @class */ (function () {
    function ArticleCodeBlockComponent() {
    }
    ArticleCodeBlockComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'article-code-block',
                    template: "<daff-article>\n  <pre><code>\n    This is a line of code.\n    This is another line of code.\n  </code></pre>\n</daff-article>\n"
                }] }
    ];
    return ArticleCodeBlockComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ARTICLE_EXAMPLES = [
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
var ArticleExamplesModule = /** @class */ (function () {
    function ArticleExamplesModule() {
    }
    ArticleExamplesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(ARTICLE_EXAMPLES),
                    imports: [
                        CommonModule,
                        DaffArticleModule
                    ],
                    entryComponents: __spread(ARTICLE_EXAMPLES)
                },] }
    ];
    return ArticleExamplesModule;
}());

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
