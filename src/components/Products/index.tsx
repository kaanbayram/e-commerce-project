import React from "react";
import * as Styles from "./assets/productsStyles.scss";
import { Button, Pagination } from 'antd';
import { Product } from "../";

export default function Products() {


    return (
        <div className={Styles.container}>
            <span className={Styles.header}>Products</span>
            <div className={Styles.buttons}>
                <Button className={Styles.mug}>
                    mug
                </Button>
                <Button className={Styles.shirt}>
                    shirt
                </Button>
            </div>

            <div className={Styles.products}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <Pagination defaultCurrent={1} defaultPageSize={16} className={Styles.pagination} />

        </div>
    );
}