import { Drawer } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import { Basket, Filters, Products } from "../";
import * as Styles from './assets/contentStyles.scss'
import { IContentActionProps, IContentProps } from "./entities";

export function Content(props: IContentProps & IContentActionProps) {

    function onCloseFilterDrawer() {
        props.changeFilterDrawerStatus(false);
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
                    <div className={Styles.drawerContainer}>
                        <Filters />
                    </div>
                </Drawer>
            </>
        );
    }

    return (
        <>
            {filterDrawer()}
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