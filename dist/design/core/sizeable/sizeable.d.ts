export interface DaffSizeable<T extends DaffSizeAllType> {
    size: T;
}
export declare type DaffSizeXSmallType = 'xs';
export declare type DaffSizeSmallType = 'sm';
export declare type DaffSizeMediumType = 'md';
export declare type DaffSizeLargeType = 'lg';
export declare type DaffSizeXLargeType = 'xl';
export declare type DaffSizeAllType = DaffSizeXSmallType | DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType | DaffSizeXLargeType;
export declare enum DaffSizeableEnum {
    XSmall = "xs",
    Small = "sm",
    Medium = "md",
    Large = "lg",
    XLarge = "xl"
}
