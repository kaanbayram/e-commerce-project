import { IFilterActionPayload } from "../../../redux/actions";

export interface IProductsActionProps {
    setBasket: (data: string) => void;
    changeFilter: (data: IFilterActionPayload) => void;
}