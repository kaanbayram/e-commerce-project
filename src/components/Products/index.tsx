import { IFilterActionPayload } from "../../redux/actions";
import { connect } from "react-redux";
import { BaseState } from "../../entities";
import { IProductsActionProps, IProductsProps } from "./entities";
import Products from "./Products";
import { changeFilterSortingAction, setBasketAction } from "../../redux/actions";

const mapStateToProps = function (state: BaseState): IProductsProps {
    return {
        products: state.products,
        companies: state.companies,
        brandFilter: state.brandFilter,
        sortingType: state.sortingType,
        tagFilter: state.tagFilter,
        itemTypeFilter: state.itemTypeFilter as any
    }
}

const mapDispatchToProps = function (dispatch: Function): IProductsActionProps {
    return {
        setBasket: (data: string) => {
            dispatch(setBasketAction(data));
        },
        changeFilter: (data: IFilterActionPayload) => {
            dispatch(changeFilterSortingAction(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);