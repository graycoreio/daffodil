export interface DaffStatusable {
    status: DaffStatus;
}
export declare type DaffStatus = 'warn' | 'error' | 'success';
export declare enum DaffStatusEnum {
    Warn = "warn",
    Error = "error",
    Success = "success"
}
