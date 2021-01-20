var _a, _b;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffLoadingState } from '@daffodil/core/state';
import { DaffCartOperationType } from './cart-operation-type.enum';
import { DaffCartItemLoadingState } from './loading/cart-loading.type';
import { DaffCartResolveState } from './cart-resolve/cart-resolve-state.enum';
/** @type {?} */
export var initialState = Object.freeze({
    cart: {
        id: null,
        subtotal: null,
        grand_total: null,
        coupons: [],
        items: [],
        billing_address: null,
        shipping_address: null,
        payment: null,
        totals: [],
        shipping_information: null,
        available_shipping_methods: [],
        available_payment_methods: [],
    },
    loading: (_a = {},
        _a[DaffCartOperationType.Cart] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.Item] = DaffCartItemLoadingState.Complete,
        _a[DaffCartOperationType.ShippingAddress] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.BillingAddress] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.ShippingInformation] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.ShippingMethods] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.Payment] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.PaymentMethods] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.Coupon] = DaffLoadingState.Complete,
        _a),
    errors: (_b = {},
        _b[DaffCartOperationType.Cart] = [],
        _b[DaffCartOperationType.Item] = [],
        _b[DaffCartOperationType.ShippingAddress] = [],
        _b[DaffCartOperationType.BillingAddress] = [],
        _b[DaffCartOperationType.ShippingInformation] = [],
        _b[DaffCartOperationType.ShippingMethods] = [],
        _b[DaffCartOperationType.Payment] = [],
        _b[DaffCartOperationType.PaymentMethods] = [],
        _b[DaffCartOperationType.Coupon] = [],
        _b),
    resolved: DaffCartResolveState.Default
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pbml0aWFsLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9jYXJ0LWluaXRpYWwtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFOUUsTUFBTSxLQUFPLFlBQVksR0FBOEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNuRSxJQUFJLEVBQUU7UUFDSixFQUFFLEVBQUUsSUFBSTtRQUNSLFFBQVEsRUFBRSxJQUFJO1FBQ2QsV0FBVyxFQUFFLElBQUk7UUFDakIsT0FBTyxFQUFFLEVBQUU7UUFDWCxLQUFLLEVBQUUsRUFBRTtRQUNULGVBQWUsRUFBRSxJQUFJO1FBQ3JCLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsRUFBRTtRQUNWLG9CQUFvQixFQUFFLElBQUk7UUFDMUIsMEJBQTBCLEVBQUUsRUFBRTtRQUM5Qix5QkFBeUIsRUFBRSxFQUFFO0tBQzlCO0lBQ0QsT0FBTztRQUNMLEdBQUMscUJBQXFCLENBQUMsSUFBSSxJQUFHLGdCQUFnQixDQUFDLFFBQVE7UUFDdkQsR0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUcsd0JBQXdCLENBQUMsUUFBUTtRQUMvRCxHQUFDLHFCQUFxQixDQUFDLGVBQWUsSUFBRyxnQkFBZ0IsQ0FBQyxRQUFRO1FBQ2xFLEdBQUMscUJBQXFCLENBQUMsY0FBYyxJQUFHLGdCQUFnQixDQUFDLFFBQVE7UUFDakUsR0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsSUFBRyxnQkFBZ0IsQ0FBQyxRQUFRO1FBQ3RFLEdBQUMscUJBQXFCLENBQUMsZUFBZSxJQUFHLGdCQUFnQixDQUFDLFFBQVE7UUFDbEUsR0FBQyxxQkFBcUIsQ0FBQyxPQUFPLElBQUcsZ0JBQWdCLENBQUMsUUFBUTtRQUMxRCxHQUFDLHFCQUFxQixDQUFDLGNBQWMsSUFBRyxnQkFBZ0IsQ0FBQyxRQUFRO1FBQ2pFLEdBQUMscUJBQXFCLENBQUMsTUFBTSxJQUFHLGdCQUFnQixDQUFDLFFBQVE7V0FDMUQ7SUFDRCxNQUFNO1FBQ0osR0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUcsRUFBRTtRQUNoQyxHQUFDLHFCQUFxQixDQUFDLElBQUksSUFBRyxFQUFFO1FBQ2hDLEdBQUMscUJBQXFCLENBQUMsZUFBZSxJQUFHLEVBQUU7UUFDM0MsR0FBQyxxQkFBcUIsQ0FBQyxjQUFjLElBQUcsRUFBRTtRQUMxQyxHQUFDLHFCQUFxQixDQUFDLG1CQUFtQixJQUFHLEVBQUU7UUFDL0MsR0FBQyxxQkFBcUIsQ0FBQyxlQUFlLElBQUcsRUFBRTtRQUMzQyxHQUFDLHFCQUFxQixDQUFDLE9BQU8sSUFBRyxFQUFFO1FBQ25DLEdBQUMscUJBQXFCLENBQUMsY0FBYyxJQUFHLEVBQUU7UUFDMUMsR0FBQyxxQkFBcUIsQ0FBQyxNQUFNLElBQUcsRUFBRTtXQUNuQztJQUNELFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxPQUFPO0NBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFJlZHVjZXJTdGF0ZSB9IGZyb20gJy4vY2FydC1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkNhcnRPcGVyYXRpb25UeXBlIH0gZnJvbSAnLi9jYXJ0LW9wZXJhdGlvbi10eXBlLmVudW0nO1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtTG9hZGluZ1N0YXRlIH0gZnJvbSAnLi9sb2FkaW5nL2NhcnQtbG9hZGluZy50eXBlJztcbmltcG9ydCB7IERhZmZDYXJ0UmVzb2x2ZVN0YXRlIH0gZnJvbSAnLi9jYXJ0LXJlc29sdmUvY2FydC1yZXNvbHZlLXN0YXRlLmVudW0nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxhbnk+ID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGNhcnQ6IHtcbiAgICBpZDogbnVsbCxcbiAgICBzdWJ0b3RhbDogbnVsbCxcbiAgICBncmFuZF90b3RhbDogbnVsbCxcbiAgICBjb3Vwb25zOiBbXSxcbiAgICBpdGVtczogW10sXG4gICAgYmlsbGluZ19hZGRyZXNzOiBudWxsLFxuICAgIHNoaXBwaW5nX2FkZHJlc3M6IG51bGwsXG4gICAgcGF5bWVudDogbnVsbCxcbiAgICB0b3RhbHM6IFtdLFxuICAgIHNoaXBwaW5nX2luZm9ybWF0aW9uOiBudWxsLFxuICAgIGF2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzOiBbXSxcbiAgICBhdmFpbGFibGVfcGF5bWVudF9tZXRob2RzOiBbXSxcbiAgfSxcbiAgbG9hZGluZzoge1xuICAgIFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuQ2FydF06IERhZmZMb2FkaW5nU3RhdGUuQ29tcGxldGUsXG4gICAgW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5JdGVtXTogRGFmZkNhcnRJdGVtTG9hZGluZ1N0YXRlLkNvbXBsZXRlLFxuICAgIFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdBZGRyZXNzXTogRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZSxcbiAgICBbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkJpbGxpbmdBZGRyZXNzXTogRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZSxcbiAgICBbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dOiBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlLFxuICAgIFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdNZXRob2RzXTogRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZSxcbiAgICBbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRdOiBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlLFxuICAgIFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudE1ldGhvZHNdOiBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlLFxuICAgIFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuQ291cG9uXTogRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZSxcbiAgfSxcbiAgZXJyb3JzOiB7XG4gICAgW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5DYXJ0XTogW10sXG4gICAgW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5JdGVtXTogW10sXG4gICAgW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ0FkZHJlc3NdOiBbXSxcbiAgICBbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkJpbGxpbmdBZGRyZXNzXTogW10sXG4gICAgW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ0luZm9ybWF0aW9uXTogW10sXG4gICAgW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ01ldGhvZHNdOiBbXSxcbiAgICBbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRdOiBbXSxcbiAgICBbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRNZXRob2RzXTogW10sXG4gICAgW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5Db3Vwb25dOiBbXSxcbiAgfSxcbiAgcmVzb2x2ZWQ6IERhZmZDYXJ0UmVzb2x2ZVN0YXRlLkRlZmF1bHRcbn0pO1xuIl19