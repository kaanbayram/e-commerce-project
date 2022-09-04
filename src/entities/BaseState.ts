import { Record } from "immutable";

export interface IBaseState {
    products: any
}

export type BaseState = Record<IBaseState> & Readonly<IBaseState>;

export const BaseStateFactory = Record<IBaseState>({
    products: null
})