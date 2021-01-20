/**
 * The particular segment of DaffCart that an operation applies to.
 * Errors and loading are tracked separately for each type of cart operation.
 */
export declare enum DaffCartOperationType {
    Cart = "Cart",
    Item = "Item",
    BillingAddress = "Billing Address",
    ShippingAddress = "Shipping Address",
    Payment = "Payment",
    PaymentMethods = "Payment Methods",
    ShippingInformation = "Shipping Information",
    ShippingMethods = "Shipping Methods",
    Coupon = "Coupon"
}
