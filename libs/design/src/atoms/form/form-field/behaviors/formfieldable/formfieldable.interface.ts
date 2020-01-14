import { DaffFocusable } from '../focusable/focusable-interface';
import { DaffRaiseable } from '../raiseable/raiseable-interface';
import { DaffErrorable } from '../errorable/errorable-interface';
import { DaffValidable } from '../validable/validable-interface';

export interface DaffFormFieldable extends
    DaffErrorable,
    DaffValidable,
    DaffRaiseable,
    DaffFocusable {}
