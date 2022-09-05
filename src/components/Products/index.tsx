import React from "react";
import * as Styles from "./assets/productsStyles.scss";
import { Button, Pagination } from 'antd';
import { Product } from "../";
import RightIcon from './assets/arrow-right.png';
import LeftIcon from './assets/arrow-left.png';


export default function Products() {


    function itemRender(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', element: React.ReactNode): React.ReactNode {

        switch (type) {
            case "next":
                return <div className={Styles.nextContainer}><span>Next</span><img src={RightIcon} /></div>;
            case "prev":
                return <div className={Styles.prevContainer}><img src={LeftIcon} /><span>Prev</span></div>;
            case "jump-prev":
                return <div className={Styles.jumpPrev}><span>...</span></div>
            case "jump-next":
                return <div className={Styles.jumpNext}><span>...</span></div>;

            default:
                return element;
        }
    }

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

            <Pagination
                defaultCurrent={1}
                defaultPageSize={16}
                className={Styles.pagination}
                total={10000}
                responsive
                showQuickJumper={false}
                showLessItems={false}
                itemRender={itemRender}
            />

        </div>
    );
}