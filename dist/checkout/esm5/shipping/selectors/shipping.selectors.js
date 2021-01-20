/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';
/**
 * Shipping Feature State
 * @type {?}
 */
export var selectShippingFeatureState = createFeatureSelector('shipping');
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.shipping; };
/**
 * Shipping State
 * @type {?}
 */
export var selectShippingState = createSelector(selectShippingFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.shippingAddress; };
/** @type {?} */
export var selectShippingAddress = createSelector(selectShippingState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.selectedShippingOptionId; };
/** @type {?} */
export var selectShippingOptionId = createSelector(selectShippingState, (ɵ2));
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return !!state; };
/** @type {?} */
export var selectIsShippingAddressValid = createSelector(selectShippingAddress, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsic2hpcHBpbmcvc2VsZWN0b3JzL3NoaXBwaW5nLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7Ozs7O0FBVXRGLE1BQU0sS0FBTywwQkFBMEIsR0FBd0QscUJBQXFCLENBQTRCLFVBQVUsQ0FBQzs7Ozs7QUFPekosVUFBQyxLQUFnQyxJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjOzs7OztBQUZ0RCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsY0FBYyxDQUMvQywwQkFBMEIsT0FFM0I7Ozs7O0FBSUMsVUFBQyxLQUErQixJQUFLLE9BQUEsS0FBSyxDQUFDLGVBQWUsRUFBckIsQ0FBcUI7O0FBRjVELE1BQU0sS0FBTyxxQkFBcUIsR0FBMEMsY0FBYyxDQUN4RixtQkFBbUIsT0FFcEI7Ozs7O0FBSUMsVUFBQyxLQUErQixJQUFLLE9BQUEsS0FBSyxDQUFDLHdCQUF3QixFQUE5QixDQUE4Qjs7QUFGckUsTUFBTSxLQUFPLHNCQUFzQixHQUFxQyxjQUFjLENBQ3BGLG1CQUFtQixPQUVwQjs7Ozs7QUFJQyxVQUFDLEtBQWtCLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU87O0FBRmpDLE1BQU0sS0FBTyw0QkFBNEIsR0FBc0MsY0FBYyxDQUMzRixxQkFBcUIsT0FFdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlNoaXBwaW5nUmVkdWNlclN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvc2hpcHBpbmcvc2hpcHBpbmctcmVkdWNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlNoaXBwaW5nUmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL3NoaXBwaW5nLXJlZHVjZXJzLmludGVyZmFjZSc7XG5cbi8qKlxuICogU2hpcHBpbmcgRmVhdHVyZSBTdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2VsZWN0U2hpcHBpbmdGZWF0dXJlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmU2hpcHBpbmdSZWR1Y2Vyc1N0YXRlPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxEYWZmU2hpcHBpbmdSZWR1Y2Vyc1N0YXRlPignc2hpcHBpbmcnKTtcblxuLyoqXG4gKiBTaGlwcGluZyBTdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2VsZWN0U2hpcHBpbmdTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RTaGlwcGluZ0ZlYXR1cmVTdGF0ZSxcbiAgKHN0YXRlOiBEYWZmU2hpcHBpbmdSZWR1Y2Vyc1N0YXRlKSA9PiBzdGF0ZS5zaGlwcGluZ1xuKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFNoaXBwaW5nQWRkcmVzczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZBZGRyZXNzPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RTaGlwcGluZ1N0YXRlLFxuICAoc3RhdGU6IERhZmZTaGlwcGluZ1JlZHVjZXJTdGF0ZSkgPT4gc3RhdGUuc2hpcHBpbmdBZGRyZXNzXG4pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0U2hpcHBpbmdPcHRpb25JZDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZz4gPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0U2hpcHBpbmdTdGF0ZSxcbiAgKHN0YXRlOiBEYWZmU2hpcHBpbmdSZWR1Y2VyU3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkU2hpcHBpbmdPcHRpb25JZFxuKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzU2hpcHBpbmdBZGRyZXNzVmFsaWQ6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RTaGlwcGluZ0FkZHJlc3MsXG4gIChzdGF0ZTogRGFmZkFkZHJlc3MpID0+ICEhc3RhdGVcbik7XG4iXX0=