/**
 * Defines optional settings that control the behavior of a toast.
 */
export interface DaffToastConfiguration {
  /**
   * The duration (in milliseconds) the toast remains visible before dismissal. By default, toasts without actions are dismissed after `5000ms`.
   *
   * While a duration can be set for actionable toasts, it is not recommended since
   * users should have sufficient time to interact with the actions.
   *
   *
   * @usage
   * ```
   * export class CustomComponent {
   *   private toast: DaffToast;
   *
   *   constructor(private toastService: DaffToastService) {}
   *
   *   open() {
   *     this.toast = this.toastService.open({
   *       title: 'Update Complete',
   *       message: 'This page has been updated to the newest version.',
   *       status: 'success',
   *     },
   *     {
   *       duration: 7000,
   *     });
   *   }
   * }
   * ```
   */
  duration?: number;
}

export const daffDefaultToastConfiguration: DaffToastConfiguration = {};
