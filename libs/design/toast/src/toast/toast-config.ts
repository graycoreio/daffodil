export interface DaffToastConfiguration {
  /**
   * The duration (in milliseconds) that a toast is visible before it's dismissed.
   * If undefined, the toast will remain open until closed another way.
   */
  duration?: number;
}

export const daffDefaultToastConfiguration: DaffToastConfiguration = {};
