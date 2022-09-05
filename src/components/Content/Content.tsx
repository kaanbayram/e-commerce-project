import { Drawer } from "antd";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Basket, Filters, Products } from "../";
import * as Styles from './assets/contentStyles.scss'
import { IContentActionProps, IContentProps } from "./entities";

export function Content(props: IContentProps & IContentActionProps) {

    function onCloseFilterDrawer() {
        props.changeFilterDrawerStatus(false);
    }

    function onCloseBasketDrawer() {
        props.changeBasketDrawerStatus(false);
    }

    useEffect(() => {
        document.body.style.overflow = (props.basketDrawer || props.filterDrawer) ? "hidden" : "scroll";
    }, [props.basketDrawer, props.filterDrawer])

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
                        <Basket />
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
                    <Basket />
                </div>
            </div>
        </>
    );
}