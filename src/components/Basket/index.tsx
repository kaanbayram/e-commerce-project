import { Button } from "antd";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { BasketItem } from "../";
import * as Styles from './assets/basketStyles.scss';

export default function Basket() {


    return (
        <div className={Styles.basket}>
            <div className={Styles.basketItems}>
                <BasketItem />
            </div>
            <Button className={Styles.basketButton}>
                ₺39,97
            </Button>
        </div>
    );
}