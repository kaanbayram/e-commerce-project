import { Record } from "immutable";

export interface IBaseState {
    filterDrawer: boolean;
    basketDrawer: boolean;
}

export interface IReadOnlyBaseState {
    filterDrawer: boolean;
    basketDrawer: boolean;
}

export type BaseState = Record<IBaseState> & Readonly<IReadOnlyBaseState>;

export const BaseStateFactory = Record<IReadOnlyBaseState>({
    filterDrawer: false,
    basketDrawer: false
})

export const BaseStateFactoryFromJS = function (data: IBaseState) {
    return BaseStateFactory({
        filterDrawer: data.filterDrawer,
        basketDrawer: data.basketDrawer
    })
}