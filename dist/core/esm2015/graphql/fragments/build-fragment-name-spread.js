/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getFragmentNames = (/**
 * @param {?} fragment
 * @return {?}
 */
(fragment) => fragment.definitions.filter((/**
 * @param {?} def
 * @return {?}
 */
def => def.kind === 'FragmentDefinition')).map((/**
 * @param {?} def
 * @return {?}
 */
def => ((/** @type {?} */ (def))).name.value)))
/**
 * Builds a list of fragment names present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * @param fragments The created fragments.
 */
;
const ɵ0 = getFragmentNames;
/**
 * Builds a list of fragment names present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * \@param fragments The created fragments.
 * @type {?}
 */
const daffGetFragmentNames = (/**
 * @param {...?} fragments
 * @return {?}
 */
(...fragments) => fragments.reduce((/**
 * @param {?} acc
 * @param {?} fragment
 * @return {?}
 */
(acc, fragment) => acc.concat(getFragmentNames(fragment))), []))
/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * @param fragments A list of GraphQL documents that contain fragments.
 */
;
const ɵ1 = daffGetFragmentNames;
/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * \@param fragments A list of GraphQL documents that contain fragments.
 * @type {?}
 */
export const daffBuildFragmentNameSpread = (/**
 * @param {...?} fragments
 * @return {?}
 */
(...fragments) => daffGetFragmentNames(...fragments).reduce((/**
 * @param {?} acc
 * @param {?} name
 * @return {?}
 */
(acc, name) => acc.concat(`...${name}\n`)), ''));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZnJhZ21lbnQtbmFtZS1zcHJlYWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29yZS9ncmFwaHFsLyIsInNvdXJjZXMiOlsiZnJhZ21lbnRzL2J1aWxkLWZyYWdtZW50LW5hbWUtc3ByZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BRU0sZ0JBQWdCOzs7O0FBQUcsQ0FBQyxRQUFzQixFQUFFLEVBQUUsQ0FDbEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNOzs7O0FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDaEMsR0FBRyxDQUFDLElBQUksS0FBSyxvQkFBb0IsRUFDbEMsQ0FBQyxHQUFHOzs7O0FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDVixDQUFDLG1CQUFBLEdBQUcsRUFBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQzNDLENBQUE7QUFFSDs7OztHQUlHOzs7Ozs7Ozs7TUFDRyxvQkFBb0I7Ozs7QUFBRyxDQUFDLEdBQUcsU0FBeUIsRUFBWSxFQUFFLENBQ3RFLFNBQVMsQ0FBQyxNQUFNOzs7OztBQUFDLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFBO0FBRWpGOzs7OztHQUtHOzs7Ozs7Ozs7O0FBQ0gsTUFBTSxPQUFPLDJCQUEyQjs7OztBQUFHLENBQUMsR0FBRyxTQUF5QixFQUFVLEVBQUUsQ0FDbEYsb0JBQW9CLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxNQUFNOzs7OztBQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUsIEZyYWdtZW50RGVmaW5pdGlvbk5vZGUgfSBmcm9tICdncmFwaHFsJ1xuXG5jb25zdCBnZXRGcmFnbWVudE5hbWVzID0gKGZyYWdtZW50OiBEb2N1bWVudE5vZGUpID0+XG4gIGZyYWdtZW50LmRlZmluaXRpb25zLmZpbHRlcihkZWYgPT5cbiAgICBkZWYua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbidcbiAgKS5tYXAoZGVmID0+XG4gICAgKGRlZiBhcyBGcmFnbWVudERlZmluaXRpb25Ob2RlKS5uYW1lLnZhbHVlXG4gIClcblxuLyoqXG4gKiBCdWlsZHMgYSBsaXN0IG9mIGZyYWdtZW50IG5hbWVzIHByZXNlbnQgaW5zaWRlIHRoZSBzcGVjaWZpZWQgR3JhcGhRTCBkb2N1bWVudCBub2Rlcy5cbiAqIFJldHVybnMgYW4gZW1wdHkgYXJyYXkgaWYgbm8gZnJhZ21lbnRzIGhhdmUgYmVlbiBkZWZpbmVkIG9yIGlmIG51bGwgaXMgcGFzc2VkLlxuICogQHBhcmFtIGZyYWdtZW50cyBUaGUgY3JlYXRlZCBmcmFnbWVudHMuXG4gKi9cbmNvbnN0IGRhZmZHZXRGcmFnbWVudE5hbWVzID0gKC4uLmZyYWdtZW50czogRG9jdW1lbnROb2RlW10pOiBzdHJpbmdbXSA9PlxuICBmcmFnbWVudHMucmVkdWNlKChhY2MsIGZyYWdtZW50KSA9PiBhY2MuY29uY2F0KGdldEZyYWdtZW50TmFtZXMoZnJhZ21lbnQpKSwgW10pXG5cbi8qKlxuICogQnVpbGRzIGEgc3RyaW5nIG9mIGZyYWdtZW50IG5hbWVzIHRoYXQgY2FuIGJlIGludGVycG9sYXRlZCBpbnRvIGEgR3JhcGhRTCBxdWVyeS5cbiAqIEVhY2ggbmFtZSBpcyBzZXBhcmF0ZWQgYnkgYSBuZXdsaW5lIGNoYXJhY3RlcjogJ1xcbicuXG4gKiBJZiBhbiBlbXB0eSBhcnJheSBpcyBwYXNzZWQsIGFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZC5cbiAqIEBwYXJhbSBmcmFnbWVudHMgQSBsaXN0IG9mIEdyYXBoUUwgZG9jdW1lbnRzIHRoYXQgY29udGFpbiBmcmFnbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQgPSAoLi4uZnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSk6IHN0cmluZyA9PlxuICBkYWZmR2V0RnJhZ21lbnROYW1lcyguLi5mcmFnbWVudHMpLnJlZHVjZSgoYWNjLCBuYW1lKSA9PiBhY2MuY29uY2F0KGAuLi4ke25hbWV9XFxuYCksICcnKVxuIl19