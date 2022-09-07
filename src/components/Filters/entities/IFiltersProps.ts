import { List } from "immutable";
import { Company, Product, SortingType } from "../../../entities";

export interface IFiltersProps {
    companies: List<Company>;
    products: List<Product>;
    sortingType: SortingType;
}