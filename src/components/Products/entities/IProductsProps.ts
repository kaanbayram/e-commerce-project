import { List } from "immutable";
import { Company, ItemType, Product, SortingType } from "../../../entities";

export interface IProductsProps {
    products: List<Product>;
    sortingType: SortingType
    brandFilter: List<string>;
    tagFilter: List<string>;
    companies: List<Company>;
    itemTypeFilter: ItemType
}