import React from 'react';
import { Counter } from '../';
import { Basket, IBasketItem } from '../../common';
import * as Styles from './assets/basketItem.scss';
import { IBasketItemActionProps, IBasketItemProps } from './entities';

export default function BasketItem(props: IBasketItemProps & IBasketItemActionProps) {


    /**
     * Decreasing or deleting product from storage and send action to set store
     * @param item Basket item parameter for recognize which item gonna decrease or delete
     */
    function onDecrease(item: IBasketItem) {
        const newBasket = Basket.deleteFromBasket(item.id);
        props.setBasket(newBasket);

    }

     /**
     * Increasing or adding product from storage and send action to set store
     * @param item Basket item parameter for recognize which item gonna increase or add
     */
    function onIncrease(item: IBasketItem) {
        const newBasket = Basket.addToBasket({ id: item.id, name: item.name, price: item.price });
        props.setBasket(newBasket);
    }

    /**
     * 
     * @returns Getting basket products and counts
     */
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