export declare type DaffLogoType = 'icon' | 'full';
export declare enum DaffLogoTypeEnum {
    ICON = "icon",
    FULL = "full"
}
export declare type DaffLogoColor = 'dark' | 'light' | 'base' | 'baseContrast';
export declare enum DaffLogoColorEnum {
    BLACK = "dark",
    WHITE = "light",
    BASE = "base",
    BASECONTRAST = "baseContrast"
}
export declare class DaffLogoComponent {
    /**
     * @docs
     *
     * Rendering property for showing the "full" logo
     * with test, or only the flower.
     */
    type: DaffLogoType;
    /**
     * @docs
     *
     * Determines the color of the logo. The logo supports a
     * smaller subset of DaffColorable, so it
     * has its own custom types.
     */
    color: DaffLogoColor;
    /**
     * @docs
     *
     * Path to the flower in a project, defaults
     * to what is handle by the branding schematics.
     */
    flowerPath: string;
    /**
     * Helper function to determine if the logo type is "full"
     */
    isFull(): boolean;
}
