import { BaseState, BaseStateFactory } from "../../entities";
import { productsReducer } from "./index";

export default function rootReducer(state = BaseStateFactory(), action: any): BaseState {
    return state.withMutations((state) => {
        state.set("products", productsReducer(state.products, action))
        return state;
    });
}