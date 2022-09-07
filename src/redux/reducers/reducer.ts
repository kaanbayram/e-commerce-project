import { BaseState, BaseStateFactory } from "../../entities";
import { BaseActionTypes } from "../actions";

export default function rootReducer(state = BaseStateFactory(), action: any): BaseState {

    switch (action.type) {
        case BaseActionTypes.BASE_CHANGE_FILTER_DRAWER_STATUS:
            return state.set("filterDrawer", action.data);
        case BaseActionTypes.BASE_CHANGE_BASKET_DRAWER_STATUS:
            return state.set("basketDrawer", action.data);
        case BaseActionTypes.BASE_SET_PRODUCTS:
            return state.set("products", action.data);
        case BaseActionTypes.BASE_SET_COMPANIES:
            return state.set("companies", action.data);
        case BaseActionTypes.BASE_SET_BASKET:
            return state.set("basket", action.data);
        case BaseActionTypes.BASE_CHANGE_FILTER:
            return state.set(action.data.path, action.data.data);
        case BaseActionTypes.BASE_CHANGE_LOADING_STATUS:
            return state.set("loading", action.data);

        case "@@INIT":  // Setting localStorage basket to store to make more managable when store initialize
            return state.set("basket", localStorage.getItem("basket") as string);
        default:
            return state;
    }
}
