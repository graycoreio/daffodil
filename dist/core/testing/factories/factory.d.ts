import { IDaffModelFactory } from './factory.interface';
interface ArglessConstructable<T> {
    new (): T;
}
export declare abstract class DaffModelFactory<T extends Object> implements IDaffModelFactory<T> {
    type: ArglessConstructable<T>;
    constructor(type: ArglessConstructable<T>);
    create(partial?: {}): T;
    createMany(qty?: number, partial?: {}): T[];
}
export {};
