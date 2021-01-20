/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { orderFragment } from './fragments/public_api';
/** @type {?} */
export const getGuestOrders = (/**
 * @param {?=} extraOrderFragments
 * @return {?}
 */
(extraOrderFragments = []) => gql `
  query GetGuestOrders($cartId: String!) {
    graycoreGuestOrders(cartId: $cartId) {
      items {
        ...order
        ${daffBuildFragmentNameSpread(...extraOrderFragments)}
      }
    }
  }
  ${orderFragment}
  ${daffBuildFragmentDefinition(...extraOrderFragments)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWd1ZXN0LW9yZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZ2V0LWd1ZXN0LW9yZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLGNBQWM7Ozs7QUFBRyxDQUFDLHNCQUFzQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQTs7Ozs7VUFLckUsMkJBQTJCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQzs7OztJQUl6RCxhQUFhO0lBQ2IsMkJBQTJCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztDQUN0RCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgb3JkZXJGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgZ2V0R3Vlc3RPcmRlcnMgPSAoZXh0cmFPcmRlckZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBxdWVyeSBHZXRHdWVzdE9yZGVycygkY2FydElkOiBTdHJpbmchKSB7XG4gICAgZ3JheWNvcmVHdWVzdE9yZGVycyhjYXJ0SWQ6ICRjYXJ0SWQpIHtcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgLi4ub3JkZXJcbiAgICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFPcmRlckZyYWdtZW50cyl9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7b3JkZXJGcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFPcmRlckZyYWdtZW50cyl9XG5gO1xuIl19