import React, { useEffect, useState } from "react";
import * as Styles from "./assets/productsStyles.scss";
import { Button, Pagination } from 'antd';
import { Product } from "../";
import RightIcon from './assets/arrow-right.png';
import LeftIcon from './assets/arrow-left.png';
import { IProductsActionProps, IProductsProps } from "./entities";
import { Basket } from "../../common";
import { IProductProps } from "../Product/entities";


export default function Products(props: IProductsProps & IProductsActionProps) {

    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(1);

    useEffect(() => {
        setTotal(props?.products ? props?.products?.size / 16 : 16);

        // console.log(props?.products?.size);
    }, [props.products])

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

    function addToBasket(item: IProductProps) {
        const basket = Basket.addToBasket(item);
        props.setBasket(basket);
    }

    function getProducts() {
        const products = props.products.slice((page - 1) * 16, ((page - 1) * 16) + 16);
        return products.map((product) => {
            return <Product addToBasket={addToBasket} key={product._id} id={product._id} description={product.description} name={product.name} price={product.price} />
        });
    }

    function onchangePagination(page: number, pageSize: number) {
        setPage(page);
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
                {getProducts()}
            </div>

            <Pagination
                current={page}
                defaultCurrent={1}
                defaultPageSize={16}
                className={Styles.pagination}
                total={1740}
                responsive
                showQuickJumper={false}
                showLessItems={false}
                itemRender={itemRender}
                onChange={onchangePagination}
            />

        </div>
    );
}