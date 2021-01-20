/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const initializeErrorAdder = (/**
 * @param {?} errorSpace
 * @return {?}
 */
(errorSpace) => (/**
 * @param {?} errors
 * @param {?} error
 * @return {?}
 */
(errors, error) => ({
    errors: Object.assign({}, errors, { [errorSpace]: errors[errorSpace].concat(new Array(error)) })
})));
/** @type {?} */
export const initializeErrorResetter = (/**
 * @param {?} errorSpace
 * @return {?}
 */
(errorSpace) => (/**
 * @param {?} errors
 * @return {?}
 */
(errors) => ({
    errors: Object.assign({}, errors, { [errorSpace]: [] })
})));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Itc3RhdGUtaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsicmVkdWNlcnMvZXJyb3JzL2Vycm9yLXN0YXRlLWhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxNQUFNLE9BQU8sb0JBQW9COzs7O0FBQUcsQ0FBQyxVQUFpQyxFQUFFLEVBQUU7Ozs7O0FBQ3hFLENBQUMsTUFBc0IsRUFBRSxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sb0JBQ0QsTUFBTSxJQUNULENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUMxRDtDQUNGLENBQUMsQ0FBQSxDQUFBOztBQUVKLE1BQU0sT0FBTyx1QkFBdUI7Ozs7QUFBRyxDQUFDLFVBQWlDLEVBQUUsRUFBRTs7OztBQUMzRSxDQUFDLE1BQXNCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0IsTUFBTSxvQkFDRCxNQUFNLElBQ1QsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQ2pCO0NBQ0YsQ0FBQyxDQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcblxuaW1wb3J0IHsgRGFmZkNhcnRPcGVyYXRpb25UeXBlIH0gZnJvbSAnLi4vY2FydC1vcGVyYXRpb24tdHlwZS5lbnVtJztcbmltcG9ydCB7IERhZmZDYXJ0RXJyb3JzIH0gZnJvbSAnLi9jYXJ0LWVycm9ycy50eXBlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVFcnJvckFkZGVyID0gKGVycm9yU3BhY2U6IERhZmZDYXJ0T3BlcmF0aW9uVHlwZSkgPT5cbiAgKGVycm9yczogRGFmZkNhcnRFcnJvcnMsIGVycm9yOiBEYWZmU3RhdGVFcnJvcikgPT4gKHtcbiAgICBlcnJvcnM6IHtcbiAgICAgIC4uLmVycm9ycyxcbiAgICAgIFtlcnJvclNwYWNlXTogZXJyb3JzW2Vycm9yU3BhY2VdLmNvbmNhdChuZXcgQXJyYXkoZXJyb3IpKVxuICAgIH1cbiAgfSlcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVFcnJvclJlc2V0dGVyID0gKGVycm9yU3BhY2U6IERhZmZDYXJ0T3BlcmF0aW9uVHlwZSkgPT5cbiAgKGVycm9yczogRGFmZkNhcnRFcnJvcnMpID0+ICh7XG4gICAgZXJyb3JzOiB7XG4gICAgICAuLi5lcnJvcnMsXG4gICAgICBbZXJyb3JTcGFjZV06IFtdXG4gICAgfVxuICB9KVxuIl19