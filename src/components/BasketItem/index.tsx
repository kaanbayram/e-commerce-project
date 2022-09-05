import React from 'react';
import { Counter } from '../';
import * as Styles from './assets/basketItem.scss';

export default function BasketItem() {

    function getProducts() {
        return [getProduct(), getProduct(), getProduct(), getProduct()]

    }

    function getProduct() {
        return (
            <>
                <div className={Styles.item}>
                    <div className={Styles.leftContainer}>
                        <span className={Styles.title}>Example Product</span>
                        <span className={Styles.priceTag}>₺ 323232323232323232</span>
                    </div>

                    <div className={Styles.count}>
                        <Counter />
                    </div>
                </div>
                <hr />
            </>
        );
    }

    return (
        <>
            {...getProducts()}
        </>
    );
}