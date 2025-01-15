export function daffArrayConcatMerger<T extends Array<unknown> = Array<unknown>>(a: T, b: T): T {
  return <T>a.concat(b);
}
