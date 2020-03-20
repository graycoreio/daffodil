type Constructor<T> = new (...args: any[]) => T;
export type DaffErrorCodeMap = { 
  [x:string]: Constructor<Error>
};