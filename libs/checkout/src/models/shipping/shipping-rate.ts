export interface ShippingRate {
    rate_id: number;
    price: number;
    carrier: string;
    [key: string]: any;
}