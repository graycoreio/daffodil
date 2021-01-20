import { DaffSuffixDirective } from '../suffix.directive';
import { Constructor } from '../../../core/public_api';
/**
 * A mixin for giving a component the ability to place content after another piece of content.
 */
export declare function daffSuffixableMixin<T extends Constructor>(Base: T): {
    new (...args: any[]): {
        _suffix: DaffSuffixDirective;
    };
} & T;
