/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Builds a string of fragment definitions that can be interpolated into a GraphQL query.
 * Each definition is separated by a newline character: '\n'.
 * \@param documents A list of GraphQL documents that should only contain fragments.
 * @type {?}
 */
export var daffBuildFragmentDefinition = (/**
 * @param {...?} documents
 * @return {?}
 */
function () {
    var documents = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        documents[_i] = arguments[_i];
    }
    return documents.reduce((/**
     * @param {?} acc
     * @param {?} fragment
     * @return {?}
     */
    function (acc, fragment) { return acc.concat(fragment.loc.source.body + "\n"); }), '');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZnJhZ21lbnQtZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb3JlL2dyYXBocWwvIiwic291cmNlcyI6WyJmcmFnbWVudHMvYnVpbGQtZnJhZ21lbnQtZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsTUFBTSxLQUFPLDJCQUEyQjs7OztBQUFHO0lBQUMsbUJBQTRCO1NBQTVCLFVBQTRCLEVBQTVCLHFCQUE0QixFQUE1QixJQUE0QjtRQUE1Qiw4QkFBNEI7O0lBQ3RFLE9BQUEsU0FBUyxDQUFDLE1BQU07Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsUUFBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQUksQ0FBQyxFQUEzQyxDQUEyQyxHQUFFLEVBQUUsQ0FBQztBQUFwRixDQUFvRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCdcblxuLyoqXG4gKiBCdWlsZHMgYSBzdHJpbmcgb2YgZnJhZ21lbnQgZGVmaW5pdGlvbnMgdGhhdCBjYW4gYmUgaW50ZXJwb2xhdGVkIGludG8gYSBHcmFwaFFMIHF1ZXJ5LlxuICogRWFjaCBkZWZpbml0aW9uIGlzIHNlcGFyYXRlZCBieSBhIG5ld2xpbmUgY2hhcmFjdGVyOiAnXFxuJy5cbiAqIEBwYXJhbSBkb2N1bWVudHMgQSBsaXN0IG9mIEdyYXBoUUwgZG9jdW1lbnRzIHRoYXQgc2hvdWxkIG9ubHkgY29udGFpbiBmcmFnbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gPSAoLi4uZG9jdW1lbnRzOiBEb2N1bWVudE5vZGVbXSk6IHN0cmluZyA9PlxuICBkb2N1bWVudHMucmVkdWNlKChhY2MsIGZyYWdtZW50KSA9PiBhY2MuY29uY2F0KGAke2ZyYWdtZW50LmxvYy5zb3VyY2UuYm9keX1cXG5gKSwgJycpXG4iXX0=