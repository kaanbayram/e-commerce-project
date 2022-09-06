import { Drawer } from "antd";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Basket, Filters, Products } from "../";
import { IBasketItem } from "../../common";
import * as Styles from './assets/contentStyles.scss'
import { IContentActionProps, IContentProps } from "./entities";

export function Content(props: IContentProps & IContentActionProps) {

    useEffect(() => {
        document.body.style.overflow = (props.basketDrawer || props.filterDrawer) ? "hidden" : "scroll";
    }, [props.basketDrawer, props.filterDrawer]);

    useEffect(() => {
        props.initializeData()
    })

    function onCloseFilterDrawer() {
        props.changeFilterDrawerStatus(false);
    }

    function onCloseBasketDrawer() {
        props.changeBasketDrawerStatus(false);
    }

    function getPrices() {
        if (props.basket) {
            return JSON.parse(props.basket)
                .map((item: IBasketItem) => (item.count as number) * item.price)
                ?.reduce((result: any, item: IBasketItem) => result + item)
                ?.toFixed(2);
        }
        return 0;
    }

    function filterDrawer() {
        return (
            <>
                <Drawer
                    bodyStyle={{ display: "flex" }}
                    title="Filters"
                    placement="left"
                    closable={true}
                    onClose={onCloseFilterDrawer}
                    getContainer={false}
                    visible={props.filterDrawer}>
                    <div className={Styles.drawerContainer}
                    >
                        <Filters />
                    </div>
                </Drawer>
            </>
        );
    }

    function basketDrawer() {
        return (
            <>
                <Drawer
                    bodyStyle={{ display: "flex" }}
                    title="Basket"
                    placement="right"
                    closable={true}
                    onClose={onCloseBasketDrawer}
                    getContainer={false}
                    visible={props.basketDrawer}
                >
                    <div className={Styles.drawerContainer}>
                        <Basket prices={getPrices()} />
                    </div>
                </Drawer>
            </>
        );
    }

    return (
        <>
            {filterDrawer()}
            {basketDrawer()}
            <div className={Styles.content}>

                <div className={Styles.column}>
                    <Filters />
                </div>
                <div className={Styles.productsColumn}>
                    <Products />
                </div>
                <div className={Styles.column}>
                    <Basket prices={getPrices()} />
                </div>

            </div>
        </>
    );
}