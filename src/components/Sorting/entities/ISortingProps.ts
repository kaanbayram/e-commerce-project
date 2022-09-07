import { SortingType } from "../../../entities";

export interface ISortingProps {
    sortingType: SortingType;
    onChange: (value: SortingType) => void;
}