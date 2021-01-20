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
export const daffBuildFragmentDefinition = (/**
 * @param {...?} documents
 * @return {?}
 */
(...documents) => documents.reduce((/**
 * @param {?} acc
 * @param {?} fragment
 * @return {?}
 */
(acc, fragment) => acc.concat(`${fragment.loc.source.body}\n`)), ''));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZnJhZ21lbnQtZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb3JlL2dyYXBocWwvIiwic291cmNlcyI6WyJmcmFnbWVudHMvYnVpbGQtZnJhZ21lbnQtZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsTUFBTSxPQUFPLDJCQUEyQjs7OztBQUFHLENBQUMsR0FBRyxTQUF5QixFQUFVLEVBQUUsQ0FDbEYsU0FBUyxDQUFDLE1BQU07Ozs7O0FBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnXG5cbi8qKlxuICogQnVpbGRzIGEgc3RyaW5nIG9mIGZyYWdtZW50IGRlZmluaXRpb25zIHRoYXQgY2FuIGJlIGludGVycG9sYXRlZCBpbnRvIGEgR3JhcGhRTCBxdWVyeS5cbiAqIEVhY2ggZGVmaW5pdGlvbiBpcyBzZXBhcmF0ZWQgYnkgYSBuZXdsaW5lIGNoYXJhY3RlcjogJ1xcbicuXG4gKiBAcGFyYW0gZG9jdW1lbnRzIEEgbGlzdCBvZiBHcmFwaFFMIGRvY3VtZW50cyB0aGF0IHNob3VsZCBvbmx5IGNvbnRhaW4gZnJhZ21lbnRzLlxuICovXG5leHBvcnQgY29uc3QgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uID0gKC4uLmRvY3VtZW50czogRG9jdW1lbnROb2RlW10pOiBzdHJpbmcgPT5cbiAgZG9jdW1lbnRzLnJlZHVjZSgoYWNjLCBmcmFnbWVudCkgPT4gYWNjLmNvbmNhdChgJHtmcmFnbWVudC5sb2Muc291cmNlLmJvZHl9XFxuYCksICcnKVxuIl19