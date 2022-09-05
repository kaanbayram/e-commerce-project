import { changeFilterDrawerStatusAction } from "../../redux/actions";
import { connect } from "react-redux";
import { BaseState } from "../../entities";
import { Content } from "./Content";
import { IContentActionProps, IContentProps } from "./entities";

const mapStateToProps = function (state: BaseState): IContentProps {
    return {
        filterDrawer: state.filterDrawer
    }
}

const mapDispatchToProps = function (dispatch: Function): IContentActionProps {
    return {
        changeFilterDrawerStatus: (data: any) => {
            dispatch(changeFilterDrawerStatusAction(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);