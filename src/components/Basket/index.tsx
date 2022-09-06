import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { BasketItem } from "../";
import * as Styles from './assets/basketStyles.scss';
import { IBasketProps } from "./entities";


export default function Basket(props: IBasketProps) {

    return (
        <div className={Styles.basket}>
            <div className={Styles.basketItems}>
                <BasketItem />
            </div>
            <Button className={Styles.basketButton}>
                {`₺${props.prices}`}
            </Button>
        </div>
    );
}