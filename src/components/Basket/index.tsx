import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { BasketItem } from "../";
import * as Styles from './assets/basketStyles.scss';
import { IBasketProps } from "./entities";
const classNames = require('classnames/bind');
const cx = classNames.bind(Styles);

export default function Basket(props: IBasketProps) {

    return (
        <div className={Styles.basket}>
            <div className={cx({ BasketItems: true, hasItem: !localStorage.getItem("basket") })}>
                <BasketItem />
            </div>
            <Button className={Styles.basketButton}>
                {`₺${props.prices}`}
            </Button>
        </div>
    );
}