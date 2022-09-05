import { Record } from "immutable";

export interface IBaseState {
    filterDrawer: boolean
}

export interface IReadOnlyBaseState {
    filterDrawer: boolean
}

export type BaseState = Record<IBaseState> & Readonly<IReadOnlyBaseState>;

export const BaseStateFactory = Record<IReadOnlyBaseState>({
    filterDrawer: false,
})

export const BaseStateFactoryFromJS = function (data: IBaseState) {
    return BaseStateFactory({
        filterDrawer: data.filterDrawer
    })
}