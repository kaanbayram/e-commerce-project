import { Button } from "antd";
import React from "react";
import * as Styles from "./assets/productStyles.scss";
import test from './assets/test.png'

export default function Product() {


    return (
        <div className={Styles.product}>
            <div className={Styles.productBG}>
                <img className={Styles.productImage} src={test} />

            </div>
            <a className={Styles.price}>₺ 14,99</a>
            <span title={"123"} className={Styles.productTitle}>Gergous Office MGergous Office MGergous Officeergous Office MGergous Office MGergous Officergous Office MGergous Office MGergous Officergous Office MGergous Office MGergous Offic M</span>
            <Button block className={Styles.addButton}>
                Add
            </Button>
        </div>
    );
}