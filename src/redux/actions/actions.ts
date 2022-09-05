import { BaseActionTypes } from "./actionTypes";

export function changeFilterDrawerStatusAction(data: boolean) {
    return { type: BaseActionTypes.BASE_CHANGE_FILTER_DRAWER_STATUS, data };
}