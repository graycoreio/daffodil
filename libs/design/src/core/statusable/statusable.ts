export interface DaffStatusable {
	status: DaffStatus;
}

export type DaffStatus = 'warn' | 'error' | 'success';

export enum DaffStatusEnum {
  Warn = 'warn',
  Error = 'error',
  Success = 'success'
}