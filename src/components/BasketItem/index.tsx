import { changeBasketDrawerStatusAction, changeFilterDrawerStatusAction, initializeDataAction, setBasketAction } from "../../redux/actions";
import { connect } from "react-redux";
import { BaseState } from "../../entities";
import { IBasketItemActionProps, IBasketItemProps } from "./entities";
import BasketItem from "./BasketItem";

const mapStateToProps = function (state: BaseState): IBasketItemProps {
    return {
        basket: state.basket
    }
}

const mapDispatchToProps = function (dispatch: Function): IBasketItemActionProps {
    return {
        setBasket: (data: string) => {
            dispatch(setBasketAction(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);