export declare enum MagentoSortDirectionEnum {
    Ascending = "ASC",
    Decending = "DESC"
}
export interface MagentoSortFieldAction {
    [x: string]: MagentoSortDirectionEnum;
}
