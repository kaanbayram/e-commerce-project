import { List, Record } from "immutable";
import { IProduct, Product, ProductFactoryFromJS, ReadonlyRecord } from "./";

export interface IBaseBaseState {
    filterDrawer: boolean;
    basketDrawer: boolean;
    basket: string;
}

export interface IBaseState extends IBaseBaseState {
    products: Array<IProduct>;
}

export interface IReadOnlyBaseState extends IBaseBaseState {
    products: List<Product>
}

export type BaseState = ReadonlyRecord<IReadOnlyBaseState>



export const BaseStateFactory = Record<IReadOnlyBaseState>({
    filterDrawer: false,
    basketDrawer: false,
    products: List(),
    basket: "",
})

export const BaseStateFactoryFromJS = function (data: IBaseState) {

    const _producst = data.products ? data.products.map(prod => ProductFactoryFromJS(prod)) : [];

    return BaseStateFactory({
        filterDrawer: data.filterDrawer,
        basketDrawer: data.basketDrawer,
        products: List(_producst),
        basket: data.basket
    })
}