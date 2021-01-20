import { DaffInheritableError } from '@daffodil/core';

class DaffBadInputError extends DaffInheritableError {
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_BAD_INPUT';
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { DaffBadInputError };
//# sourceMappingURL=daffodil-driver.js.map
