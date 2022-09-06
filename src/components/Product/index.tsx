import { Button } from "antd";
import React from "react";
import { Basket } from "../../common";
import * as Styles from "./assets/productStyles.scss";
import test from './assets/test.png'
import { IProductProps } from "./entities";

export default function Product(props: IProductProps) {

    function addToBasket() {
        props.addToBasket(props);
    }

    return (
        <div className={Styles.product}>
            <div className={Styles.productBG}>
                <img className={Styles.productImage} src={test} />

            </div>
            <a className={Styles.price}>₺ {props.price}</a>
            <span title={props.description} className={Styles.productTitle}>{props.name}</span>
            <Button block className={Styles.addButton} onClick={addToBasket}>
                Add
            </Button>
        </div>
    );
}