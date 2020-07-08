import { InjectionToken } from '@angular/core';

/**
 * An injection token to configure how many decimal places daffodil expects prices to have from the backend.
 * 
 * For example, setting this to 2 will cause daffodil to take in a value of 44.99 from the backend and convert it
 * to 4499. The value the app dev can expect on the other end of daffodil will also be 4499. 
 * 
 * This is needed, because there are, unfortunately, some workflows that require frontend computation such as Magento bundled product prices. 
 * The unpredictable nature of javascript float arithmetic (try 100-99.99 in a browser console) means that the final computed price for an order 
 * (computed by the backend platform) might not match the value presented to the customer on the frontend due to rounding diffs. The way daffodil handles this 
 * problem is to convert all prices to integers to avoid javascript float arithmetic.
 */
export const DaffPriceDecimalConfig = new InjectionToken<number>('DaffPriceDecimalConfig');
