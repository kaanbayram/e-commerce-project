import { changeBasketDrawerStatusAction, changeFilterDrawerStatusAction, initializeDataAction } from "../../redux/actions";
import { connect } from "react-redux";
import { BaseState } from "../../entities";
import { Content } from "./Content";
import { IContentActionProps, IContentProps } from "./entities";

const mapStateToProps = function (state: BaseState): IContentProps {
    return {
        filterDrawer: state.filterDrawer,
        basketDrawer: state.basketDrawer,
        basket: state.basket
    }
}

const mapDispatchToProps = function (dispatch: Function): IContentActionProps {
    return {
        changeFilterDrawerStatus: (data: boolean) => {
            dispatch(changeFilterDrawerStatusAction(data));
        },
        changeBasketDrawerStatus: (data: boolean) => {
            dispatch(changeBasketDrawerStatusAction(data));
        },
        initializeData: () => {
            dispatch(initializeDataAction());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);