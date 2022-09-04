import React from "react";
import { Basket, Filters, Products } from "../";
import * as Styles from './assets/contentStyles.scss'
 
export default function Content(){

    return(
        <div className={Styles.content}>
            <div className={Styles.column}>
                <Filters />
            </div>
            <div className={Styles.productsColumn}>
                <Products />
            </div>
            <div className={Styles.column}>
                <Basket />
            </div>
        </div>
    );
}