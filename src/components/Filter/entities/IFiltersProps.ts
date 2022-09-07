import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { List } from "immutable";
import { Company, Product } from "../../../entities";

export interface IFilterProps {
    items: List<IItem>;
    styles?: string;

    onChange?: (checkedValues: CheckboxValueType[]) => void;
}

export interface IItem {
    id: string;
    name: string;
}