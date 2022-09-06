import { List } from "immutable";
import { IProduct, ProductFactoryFromJS } from "../../entities";
import { BaseActionTypes } from "./actionTypes";

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
    const _producst = data ? data.map(prod => ProductFactoryFromJS(prod)) : [];
    return { type: BaseActionTypes.BASE_SET_PRODUCTS, data: List(_producst) };
}

export function setBasketAction(data: string) {
    return { type: BaseActionTypes.BASE_SET_BASKET, data: data };
}
