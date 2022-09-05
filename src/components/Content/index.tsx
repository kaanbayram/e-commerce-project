import { changeBasketDrawerStatusAction, changeFilterDrawerStatusAction } from "../../redux/actions";
import { connect } from "react-redux";
import { BaseState } from "../../entities";
import { Content } from "./Content";
import { IContentActionProps, IContentProps } from "./entities";

const mapStateToProps = function (state: BaseState): IContentProps {
    return {
        filterDrawer: state.filterDrawer,
        basketDrawer: state.basketDrawer,
    }
}

const mapDispatchToProps = function (dispatch: Function): IContentActionProps {
    return {
        changeFilterDrawerStatus: (data: boolean) => {
            dispatch(changeFilterDrawerStatusAction(data));
        },
        changeBasketDrawerStatus: (data: boolean) => {
            dispatch(changeBasketDrawerStatusAction(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);