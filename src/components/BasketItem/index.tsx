import React from 'react';
import * as Styles from './assets/basketItem.scss';

export default function BasketItem() {



    return (
        <div className={Styles.item}>
            <div className={Styles.leftContainer}>
                <span className={Styles.title}>Example Product</span>
                <span className={Styles.priceTag}>₺ 32</span>
            </div>

            <div className={Styles.count}>
                counter
            </div>

        </div>
    );
}