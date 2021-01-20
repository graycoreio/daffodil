/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var getFragmentNames = (/**
 * @param {?} fragment
 * @return {?}
 */
function (fragment) {
    return fragment.definitions.filter((/**
     * @param {?} def
     * @return {?}
     */
    function (def) {
        return def.kind === 'FragmentDefinition';
    })).map((/**
     * @param {?} def
     * @return {?}
     */
    function (def) {
        return ((/** @type {?} */ (def))).name.value;
    }));
})
/**
 * Builds a list of fragment names present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * @param fragments The created fragments.
 */
;
var ɵ0 = getFragmentNames;
/**
 * Builds a list of fragment names present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * \@param fragments The created fragments.
 * @type {?}
 */
var daffGetFragmentNames = (/**
 * @param {...?} fragments
 * @return {?}
 */
function () {
    var fragments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fragments[_i] = arguments[_i];
    }
    return fragments.reduce((/**
     * @param {?} acc
     * @param {?} fragment
     * @return {?}
     */
    function (acc, fragment) { return acc.concat(getFragmentNames(fragment)); }), []);
})
/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * @param fragments A list of GraphQL documents that contain fragments.
 */
;
var ɵ1 = daffGetFragmentNames;
/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * \@param fragments A list of GraphQL documents that contain fragments.
 * @type {?}
 */
export var daffBuildFragmentNameSpread = (/**
 * @param {...?} fragments
 * @return {?}
 */
function () {
    var fragments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fragments[_i] = arguments[_i];
    }
    return daffGetFragmentNames.apply(void 0, tslib_1.__spread(fragments)).reduce((/**
     * @param {?} acc
     * @param {?} name
     * @return {?}
     */
    function (acc, name) { return acc.concat("..." + name + "\n"); }), '');
});
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZnJhZ21lbnQtbmFtZS1zcHJlYWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29yZS9ncmFwaHFsLyIsInNvdXJjZXMiOlsiZnJhZ21lbnRzL2J1aWxkLWZyYWdtZW50LW5hbWUtc3ByZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUVNLGdCQUFnQjs7OztBQUFHLFVBQUMsUUFBc0I7SUFDOUMsT0FBQSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU07Ozs7SUFBQyxVQUFBLEdBQUc7UUFDN0IsT0FBQSxHQUFHLENBQUMsSUFBSSxLQUFLLG9CQUFvQjtJQUFqQyxDQUFpQyxFQUNsQyxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFBLEdBQUc7UUFDUCxPQUFBLENBQUMsbUJBQUEsR0FBRyxFQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7SUFBMUMsQ0FBMEMsRUFDM0M7QUFKRCxDQUlDLENBQUE7QUFFSDs7OztHQUlHOzs7Ozs7Ozs7SUFDRyxvQkFBb0I7Ozs7QUFBRztJQUFDLG1CQUE0QjtTQUE1QixVQUE0QixFQUE1QixxQkFBNEIsRUFBNUIsSUFBNEI7UUFBNUIsOEJBQTRCOztJQUN4RCxPQUFBLFNBQVMsQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLFFBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsR0FBRSxFQUFFLENBQUM7QUFBL0UsQ0FBK0UsQ0FBQTtBQUVqRjs7Ozs7R0FLRzs7Ozs7Ozs7OztBQUNILE1BQU0sS0FBTywyQkFBMkI7Ozs7QUFBRztJQUFDLG1CQUE0QjtTQUE1QixVQUE0QixFQUE1QixxQkFBNEIsRUFBNUIsSUFBNEI7UUFBNUIsOEJBQTRCOztJQUN0RSxPQUFBLG9CQUFvQixnQ0FBSSxTQUFTLEdBQUUsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxJQUFJLElBQUssT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQU0sSUFBSSxPQUFJLENBQUMsRUFBMUIsQ0FBMEIsR0FBRSxFQUFFLENBQUM7QUFBeEYsQ0FBd0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSwgRnJhZ21lbnREZWZpbml0aW9uTm9kZSB9IGZyb20gJ2dyYXBocWwnXG5cbmNvbnN0IGdldEZyYWdtZW50TmFtZXMgPSAoZnJhZ21lbnQ6IERvY3VtZW50Tm9kZSkgPT5cbiAgZnJhZ21lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGRlZiA9PlxuICAgIGRlZi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJ1xuICApLm1hcChkZWYgPT5cbiAgICAoZGVmIGFzIEZyYWdtZW50RGVmaW5pdGlvbk5vZGUpLm5hbWUudmFsdWVcbiAgKVxuXG4vKipcbiAqIEJ1aWxkcyBhIGxpc3Qgb2YgZnJhZ21lbnQgbmFtZXMgcHJlc2VudCBpbnNpZGUgdGhlIHNwZWNpZmllZCBHcmFwaFFMIGRvY3VtZW50IG5vZGVzLlxuICogUmV0dXJucyBhbiBlbXB0eSBhcnJheSBpZiBubyBmcmFnbWVudHMgaGF2ZSBiZWVuIGRlZmluZWQgb3IgaWYgbnVsbCBpcyBwYXNzZWQuXG4gKiBAcGFyYW0gZnJhZ21lbnRzIFRoZSBjcmVhdGVkIGZyYWdtZW50cy5cbiAqL1xuY29uc3QgZGFmZkdldEZyYWdtZW50TmFtZXMgPSAoLi4uZnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSk6IHN0cmluZ1tdID0+XG4gIGZyYWdtZW50cy5yZWR1Y2UoKGFjYywgZnJhZ21lbnQpID0+IGFjYy5jb25jYXQoZ2V0RnJhZ21lbnROYW1lcyhmcmFnbWVudCkpLCBbXSlcblxuLyoqXG4gKiBCdWlsZHMgYSBzdHJpbmcgb2YgZnJhZ21lbnQgbmFtZXMgdGhhdCBjYW4gYmUgaW50ZXJwb2xhdGVkIGludG8gYSBHcmFwaFFMIHF1ZXJ5LlxuICogRWFjaCBuYW1lIGlzIHNlcGFyYXRlZCBieSBhIG5ld2xpbmUgY2hhcmFjdGVyOiAnXFxuJy5cbiAqIElmIGFuIGVtcHR5IGFycmF5IGlzIHBhc3NlZCwgYW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkLlxuICogQHBhcmFtIGZyYWdtZW50cyBBIGxpc3Qgb2YgR3JhcGhRTCBkb2N1bWVudHMgdGhhdCBjb250YWluIGZyYWdtZW50cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCA9ICguLi5mcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdKTogc3RyaW5nID0+XG4gIGRhZmZHZXRGcmFnbWVudE5hbWVzKC4uLmZyYWdtZW50cykucmVkdWNlKChhY2MsIG5hbWUpID0+IGFjYy5jb25jYXQoYC4uLiR7bmFtZX1cXG5gKSwgJycpXG4iXX0=