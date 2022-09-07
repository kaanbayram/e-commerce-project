import { connect } from "react-redux";
import { BaseState } from "../../entities";
import { Home } from "./Home";
import { IHomeActionProps, IHomeProps } from "./entities";

const mapStateToProps = function (state: BaseState): IHomeProps {
    return {
        loading: state.loading,
    }
}

const mapDispatchToProps = function (dispatch: Function): IHomeActionProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);