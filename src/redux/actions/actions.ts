import { List } from "immutable";
import { CompanyFactoryFromJS, ICompany, IProduct, ProductFactoryFromJS, SortingType } from "../../entities";
import { BaseActionTypes, IFilterActionPayload } from "./actionTypes";

export function changeFilterDrawerStatusAction(data: boolean) {
    return { type: BaseActionTypes.BASE_CHANGE_FILTER_DRAWER_STATUS, data };
}

export function changeBasketDrawerStatusAction(data: boolean) {
    return { type: BaseActionTypes.BASE_CHANGE_BASKET_DRAWER_STATUS, data };
}

export function initializeDataAction() {
    return { type: BaseActionTypes.BASE_INITIALIZE_DATA, data: {} };
}

export function setProductsAction(data: IProduct[]) {
    const _products = data ? data.map(prod => ProductFactoryFromJS(prod)) : [];
    return { type: BaseActionTypes.BASE_SET_PRODUCTS, data: List(_products) };
}

export function setCompaniesAction(data: ICompany[]) {
    const _companies = data ? data.map(comp => CompanyFactoryFromJS(comp)) : [];
    return { type: BaseActionTypes.BASE_SET_COMPANIES, data: List(_companies) };
}

export function setBasketAction(data: string) {
    return { type: BaseActionTypes.BASE_SET_BASKET, data: data };
}

export function changeFilterSortingAction(data: IFilterActionPayload) {
    let _data = data.data;
    if (data.path !== "sortingType" && data.path !== "itemTypeFilter") {
        _data = List(data.data)
    }
    return { type: BaseActionTypes.BASE_CHANGE_FILTER, data: { ...data, data: _data } };
}

export function setLoadingStatus(data: boolean) {
    return { type: BaseActionTypes.BASE_CHANGE_LOADING_STATUS, data };
}