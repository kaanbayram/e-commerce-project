import React, { useEffect, useState } from "react";
import * as Styles from "./assets/productsStyles.scss";
import { Button, Pagination } from 'antd';
import { Product } from "../";
import RightIcon from './assets/arrow-right.png';
import LeftIcon from './assets/arrow-left.png';
import { IProductsActionProps, IProductsProps } from "./entities";
import { Basket } from "../../common";
import { IProductProps } from "../Product/entities";
import { ItemType, SortingType } from "../../entities";


export default function Products(props: IProductsProps & IProductsActionProps) {

    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(props.products.size);


    /**
     * listening all filters and products
     * to keep pagination total count up to date.
     */
    useEffect(() => {
        setTotal(filterProducts().size);
    }, [
        props.products,
        props.tagFilter,
        props.brandFilter,
        props.sortingType,
        props.itemTypeFilter
    ]);

    /**
     * Customizing pagination items for
     * Design
     * @param page 
     * @param type 
     * @param element 
     * @returns 
     */
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

    /**
     * Adding product to localStorage and state product
     * @param item
     */
    function addToBasket(item: IProductProps) {
        const basket = Basket.addToBasket(item);
        props.setBasket(basket);
    }

    /**
     * Filtering by itemType with "mug" and "shirt"
     * @param type
     */
    function onChangeItemTypeFilter(type: ItemType) {
        props.changeFilter({ path: "itemTypeFilter", data: type });
    }

    function filterProducts() {
        let products = props.products;
        switch (props.sortingType) {
            case SortingType.PriceHTL:
                products = products.sort((a, b) => b.price - a.price);
                break;
            case SortingType.PriceLTH:
                products = products.sort((a, b) => a.price - b.price);
                break;
            case SortingType.NTO:
                products = products.sort((a, b) => b.added - a.added);
                break;
            case SortingType.OTN:
                products = products.sort((a, b) => a.added - b.added);
                break;
            default:
                break;
        }

        if (props.brandFilter.size) {
            const brandNames = props.companies.filter(company => props.brandFilter.includes(company._id)).map(brand => brand.name.replace(/\s+/g, ''));
            products = products.filter(product => brandNames.includes(product.manufacturer));
        }

        if (props.tagFilter.size) {
            products = products.filter(product => product.tags.some(tag => props.tagFilter.includes(tag)));
        }

        if (props.itemTypeFilter) {
            products = products.filter(product => product.itemType === props.itemTypeFilter);
        }

        return products;
    }

    /**
     * Calculating and getting products for current page.
     * @returns
     */
    function getProducts() {
        const products = filterProducts().slice((page - 1) * 16, ((page - 1) * 16) + 16);
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
                <Button className={Styles.mug} onClick={() => onChangeItemTypeFilter(ItemType.Mug)} >
                    mug
                </Button>
                <Button className={Styles.shirt} onClick={() => onChangeItemTypeFilter(ItemType.Shirt)} >
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
                total={total}
                responsive
                showQuickJumper={false}
                showLessItems={false}
                itemRender={itemRender}
                onChange={onchangePagination}
            />

        </div>
    );
}