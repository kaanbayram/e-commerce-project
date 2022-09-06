import { Record } from 'immutable';
export { BaseState, BaseStateFactory, IBaseState } from "./BaseState";
export { IBaseProducts, IProduct, IReadOnlyProducts, Product, ProductFactory, ProductFactoryFromJS } from "./IProducts";

type ReadonlyRecord<T extends object> = Record<T> & Readonly<T>;

export { ReadonlyRecord }