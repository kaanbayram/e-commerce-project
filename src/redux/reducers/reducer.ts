import { BaseState, BaseStateFactory } from "../../entities";
import { BaseActionTypes } from "../actions";

export default function rootReducer(state = BaseStateFactory(), action: any): BaseState {

    switch (action.type) {
        case BaseActionTypes.BASE_CHANGE_FILTER_DRAWER_STATUS:
            return state.set("filterDrawer", action.data);
        case BaseActionTypes.BASE_CHANGE_BASKET_DRAWER_STATUS:
            return state.set("basketDrawer", action.data);

        default:
            return state
    }
}
