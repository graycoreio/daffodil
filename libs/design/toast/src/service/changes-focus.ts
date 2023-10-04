import { DaffToast } from '../interfaces/toast';

export const daffToastChangesFocus = (toast: DaffToast): boolean => toast.actions?.length > 0;
