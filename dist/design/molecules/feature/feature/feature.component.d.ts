export declare type DaffFeatureMode = 'compact' | 'normal' | undefined;
export declare enum DaffFeatureModeEnum {
    Compact = "compact",
    Normal = "normal"
}
export declare class DaffFeatureComponent {
    /**
     * @docs-private
     */
    class: boolean;
    mode: DaffFeatureMode;
    /**
     * @docs-private
     */
    readonly compact: boolean;
    /**
     * @docs-private
     */
    readonly normal: boolean;
}
