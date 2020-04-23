import { DaffCartErrorType } from './cart-error-type.enum';
import { DaffCartErrors } from './cart-errors.type';

export const initializeErrorAdder = (errorSpace: DaffCartErrorType) => {
	return (errors: DaffCartErrors, error: string) => {
		return {
			errors: {
				...errors,
				[errorSpace]: errors[errorSpace].concat(new Array(error))
			}
		};
	}
}

export const initializeErrorResetter = (errorSpace: DaffCartErrorType) => {
	return (errors: DaffCartErrors) => {
		return {
			errors: {
				...errors,
				[errorSpace]: []
			}
		};
	}
}
