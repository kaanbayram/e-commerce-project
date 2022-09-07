import { changeFilterSortingAction, IFilterActionPayload } from "../../redux/actions";
import { connect } from "react-redux";
import { BaseState } from "../../entities";
import { Filters } from "./Filters";
import { IFiltersActionProps, IFiltersProps } from "./entities";

const mapStateToProps = function (state: BaseState): IFiltersProps {
    return {
        companies: state.companies,
        products: state.products,
        sortingType: state.sortingType
    }
}

const mapDispatchToProps = function (dispatch: Function): IFiltersActionProps {
    return {
        changeFilters: (data: IFilterActionPayload) => {
            dispatch(changeFilterSortingAction(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);