import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { List } from "immutable";
import React from "react";
import { Sorting, Filter } from "../";
import { SortingType } from "../../entities";
import { FilterPath } from "../../redux/actions";
import { IItem } from "../Filter/entities/IFiltersProps";
import * as Styles from './assets/filterStyles.scss'
import { IFiltersActionProps, IFiltersProps } from "./entities";
const { v4: uuidv4 } = require('uuid');

export function Filters(props: IFiltersProps & IFiltersActionProps) {


    /**
     * Getting tags for tag filter and giving a uniq id 
     * because tags are not uniq by their names.
     * @returns tags for filter process.
     */
    function getTags() {
        const tags: IItem[] = [];
        props.products.forEach(product => {
            product.tags.forEach((tag) => {
                if (!tags.find(currentTag => currentTag.name == tag)) {
                    tags.push({ id: `${uuidv4()}_${tag}`, name: tag });
                }
            });
        });

        return List(tags);
    }

    /**
     * Created kinda generic method to send different kind of 
     * filter types
     * @param checkedValues 
     * @param type 
     */
    function onChangeFilters(checkedValues: CheckboxValueType[] | SortingType, type: FilterPath) {
        if (type === "tagFilter") {
            checkedValues = (checkedValues as CheckboxValueType[]).map(value => (value as string).split('_')[1]);
        }
        props.changeFilters({ data: checkedValues, path: type });
    }

    return (
        <div className={Styles.container}>

            <div className={Styles.sortingContainer}>

                <span className={Styles.header}>Sorting</span>

                <div className={Styles.sorting}>

                    <Sorting onChange={(value) => onChangeFilters(value, "sortingType")} sortingType={props.sortingType} />

                </div>

            </div>

            <div className={Styles.filterContainer}>

                <span className={Styles.header}>Brands</span>

                <div className={Styles.filter}>
                    <Filter
                        styles={Styles.brandsFilter}
                        items={props.companies.map(company => { return { id: company._id, name: company.name } })}
                        onChange={(checkedValues) => onChangeFilters(checkedValues, "brandFilter")}
                    />
                </div>

            </div>

            <div className={Styles.filterContainer}>

                <span className={Styles.header}>Tags</span>

                <div className={Styles.filter}>
                    <Filter
                        items={getTags()}
                        onChange={(checkedValues) => onChangeFilters(checkedValues, "tagFilter")}
                    />
                </div>

            </div>

        </div>
    );
}