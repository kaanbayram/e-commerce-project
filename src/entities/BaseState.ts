import { List, Record } from "immutable";
import { Company, CompanyFactoryFromJS, ICompany, IProduct, Product, ProductFactoryFromJS, ReadonlyRecord } from "./";

export interface IBaseBaseState {
    filterDrawer: boolean;
    basketDrawer: boolean;
    basket: string;
}

export interface IBaseState extends IBaseBaseState {
    products: Array<IProduct>;
    companies: Array<ICompany>;
}

export interface IReadOnlyBaseState extends IBaseBaseState {
    products: List<Product>;
    companies: List<Company>;
}

export type BaseState = ReadonlyRecord<IReadOnlyBaseState>

export const BaseStateFactory = Record<IReadOnlyBaseState>({
    filterDrawer: false,
    basketDrawer: false,
    products: List(),
    basket: "",
    companies: List(),
})

export const BaseStateFactoryFromJS = function (data: IBaseState) {

    const _producst = data.products ? data.products.map(prod => ProductFactoryFromJS(prod)) : [];
    const _companies = data.companies ? data.companies.map(comp => CompanyFactoryFromJS(comp)) : [];

    return BaseStateFactory({
        filterDrawer: data.filterDrawer,
        basketDrawer: data.basketDrawer,
        products: List(_producst),
        basket: data.basket,
        companies: List(_companies)
    });
}