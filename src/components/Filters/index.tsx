import React from "react";
import { Sorting, Filter } from "../";
import * as Styles from './assets/filterStyles.scss'

export default function Filters() {


    return (
        <div className={Styles.container}>

            <div className={Styles.sortingContainer}>

                <span className={Styles.header}>Sorting</span>

                <div className={Styles.sorting}>

                    <Sorting />

                </div>

            </div>

            <div className={Styles.filterContainer}>

                <span className={Styles.header}>Brands</span>

                <div className={Styles.filter}>
                    <Filter />
                </div>

            </div>

            <div className={Styles.filterContainer}>

                <span className={Styles.header}>Tags</span>

                <div className={Styles.filter}>
                    <Filter />
                </div>

            </div>

        </div>
    );
}