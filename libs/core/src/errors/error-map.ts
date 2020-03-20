type Constructor<T> = new (...args: any[]) => T;
export interface DaffErrorCodeMap {
	[x: string]: Constructor<Error>;
};
