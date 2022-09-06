import React from 'react';
import { Counter } from '../';
import { Basket, IBasketItem } from '../../common';
import { IProduct } from '../../entities';
import * as Styles from './assets/basketItem.scss';
import { IBasketItemActionProps, IBasketItemProps } from './entities';

export default function BasketItem(props: IBasketItemProps & IBasketItemActionProps) {

    function onDecrease(item: IBasketItem) {
        const newBasket = Basket.deleteFromBasket(item.id);
        props.setBasket(newBasket);

    }

    function onIncrease(item: IBasketItem) {
        const newBasket = Basket.addToBasket({ id: item.id, name: item.name, price: item.price });
        props.setBasket(newBasket);
    }

    function getProducts() {

        const basket = JSON.parse(props.basket || "[]");

        if (basket.length === 0) {
            return (
                <><span className={Styles.emptyText}>Basket Is Empty</span></>
            );
        }

        return basket.map((basketItem: IBasketItem) => {
            return (
                <>
                    <div className={Styles.item}>
                        <div className={Styles.leftContainer}>
                            <span className={Styles.title}>{basketItem.name}</span>
                            <span className={Styles.priceTag}>₺ {basketItem.price}</span>
                        </div>

                        <div className={Styles.count}>
                            <Counter count={basketItem.count as number} onDecrease={() => onDecrease(basketItem)} onIncrease={() => onIncrease(basketItem)} />
                        </div>
                    </div>
                    <hr />
                </>
            );
        });

    }

    return (
        <>
            {getProducts()}
        </>
    );
}