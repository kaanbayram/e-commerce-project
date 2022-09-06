import { List } from "immutable";
import { Product } from "../../../entities";

export interface IProductsProps {
    products: List<Product>;
}