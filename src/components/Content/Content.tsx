import { Drawer } from "antd";
import React, { useEffect } from "react";
import { Basket, Filters, Products } from "../";
import { getPrices } from "../../common";
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

    /**
     * Drawer for small or medium screens
     * @returns Returning drawer
     */
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

    /**
     * Drawer for small or medium screens
     * @returns Returning drawer
     */
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
                        <Basket prices={getPrices(props.basket)} />
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
                    <Basket prices={getPrices(props.basket)} />
                </div>

            </div>
        </>
    );
}