/**
 * An object that describes the resolution configuration of the cart state package.
 */
export interface DaffCartStateResolutionConfiguration {
    /**
     * When Daffodil fails to resolve a cart, you should navigate your users to
     * a page that is outside the scope of resolution. The `failedResolutionPath` allows you
     * to control where to navigate your users to when resolution fails.
     */
    failedResolutionPath: string;
}
/**
 * The default values of the resolution slice of the cart state configuration.
 */
export declare const daffCartStateResolutionConfigurationDefault: DaffCartStateResolutionConfiguration;
