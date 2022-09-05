import { changeFilterDrawerStatusAction } from "../../redux/actions";
import { connect } from "react-redux";
import { BaseState } from "../../entities";
import { Header } from "./Header";
import { IHeaderActionProps, IHeaderProps } from "./entities";

const mapStateToProps = function (state: BaseState): IHeaderProps {
    return {
        filterDrawer: state.filterDrawer
    }
}

const mapDispatchToProps = function (dispatch: Function): IHeaderActionProps {
    return {
        changeFilterDrawerStatus: (data: any) => {
            dispatch(changeFilterDrawerStatusAction(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);