import { IFilterActionPayload } from "../../../redux/actions";

export interface IFiltersActionProps {
    changeFilters: (data: IFilterActionPayload) => void
}