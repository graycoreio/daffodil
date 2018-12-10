import { IModelFactory } from "./factory.interface";
import { range } from "@daffodil/core";

interface ArglessConstructable<T> {
    new() : T;
}


export abstract class ModelFactory<T extends Object> implements IModelFactory<T> {
    constructor(public type: ArglessConstructable<T>){

    }

    create(partial = {}) : T {
        return {
            ...new this.type() as any, // TODO: remove in TS 3.3
            ...partial
        }
    }
    
    createMany(qty = 1, partial = {}) : T[] {
        return range(0, qty - 1).map(() => this.create(partial));
    }
}