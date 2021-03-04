export interface IDaffModelFactory<T> {
    create(partial: Partial<T>): T;
    createMany(qty: number, partial: Partial<T>): T[];
}
