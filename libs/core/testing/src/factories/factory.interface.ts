export interface IDaffModelFactory<T> {
  create<R extends T = T>(partial: Partial<T> & T extends R ? Partial<T> : R): T & R;
  create(partial?: Partial<T>): T;
  createMany(qty: number, partial: Partial<T>): T[];
}
