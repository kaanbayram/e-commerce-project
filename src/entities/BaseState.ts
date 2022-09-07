import { ItemType } from "antd/lib/menu/hooks/useItems";
import { List, Record } from "immutable";
import {
    Company, CompanyFactoryFromJS, ICompany, IProduct, Product,
    ProductFactoryFromJS, ReadonlyRecord, SortingType
} from "./";

export interface IBaseBaseState {
    filterDrawer: boolean;
    basketDrawer: boolean;
    basket: string;
    sortingType: SortingType;
    itemTypeFilter: ItemType;
    loading: boolean;
}

export interface IBaseState extends IBaseBaseState {
    products: Array<IProduct>;
    companies: Array<ICompany>;
    brandFilter: Array<string>;
    tagFilter: Array<string>;
}

export interface IReadOnlyBaseState extends IBaseBaseState {
    products: List<Product>;
    companies: List<Company>;
    brandFilter: List<string>;
    tagFilter: List<string>;
}

export type BaseState = ReadonlyRecord<IReadOnlyBaseState>

export const BaseStateFactory = Record<IReadOnlyBaseState>({
    filterDrawer: false,
    basketDrawer: false,
    products: List(),
    basket: "",
    companies: List(),
    brandFilter: List(),
    tagFilter: List(),
    sortingType: "" as any,
    itemTypeFilter: "" as any,
    loading: true
})

export const BaseStateFactoryFromJS = function (data: IBaseState) {

    const _producst = data.products ? data.products.map(prod => ProductFactoryFromJS(prod)) : [];
    const _companies = data.companies ? data.companies.map(comp => CompanyFactoryFromJS(comp)) : [];

    return BaseStateFactory({
        filterDrawer: data.filterDrawer,
        basketDrawer: data.basketDrawer,
        products: List(_producst),
        basket: data.basket,
        companies: List(_companies),
        brandFilter: List(data.brandFilter),
        tagFilter: List(data.brandFilter),
        sortingType: data.sortingType,
        itemTypeFilter: data.itemTypeFilter,
        loading: data.loading
    });
}