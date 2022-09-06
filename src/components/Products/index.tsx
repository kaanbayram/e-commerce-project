import { changeBasketDrawerStatusAction, changeFilterDrawerStatusAction } from "../../redux/actions";
import { connect } from "react-redux";
import { BaseState } from "../../entities";
import { IProductsActionProps, IProductsProps } from "./entities";
import Products from "./Products";
import { setBasketAction } from "../../redux/actions/actions";

const mapStateToProps = function (state: BaseState): IProductsProps {
    return {
        products: state.products
    }
}

const mapDispatchToProps = function (dispatch: Function): IProductsActionProps {
    return {
        setBasket: (data: string) => {
            dispatch(setBasketAction(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);