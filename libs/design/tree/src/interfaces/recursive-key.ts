export type RecursiveTreeKeyOfType<T> = keyof {
  [P in keyof T as T[P] extends T[]? P: never]: T[]
};
