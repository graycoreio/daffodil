export interface DaffToastConfiguration {
  /**
   * The duration that the toast will stay open. If undefined,
   * the toast will remain open until closed another way.
   */
  durationInMs?: number;
}

export const daffDefaultToastConfiguration: DaffToastConfiguration = {

};
