import { DaffPrefixDirective } from '../prefix.directive';
import { Constructor } from '../../../core/public_api';
/**
 * A mixin for giving a component the ability to place content before another piece of content.
 */
export declare function daffPrefixableMixin<T extends Constructor>(Base: T): {
    new (...args: any[]): {
        _prefix: DaffPrefixDirective;
    };
} & T;
