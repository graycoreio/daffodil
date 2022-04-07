export interface DaffStatusable {
  status: DaffStatus;
}

export type DaffStatus = 'warn' | 'danger' | 'success';

export enum DaffStatusEnum {
  Warn = 'warn',
  Danger = 'danger',
  Success = 'success'
}
