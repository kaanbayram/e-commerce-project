import React from "react";
import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';
import * as Styles from './assets/sortingStyles.scss';
import { SortingType } from "../../entities";
import { ISortingProps } from "./entities";

export default function Sorting(props: ISortingProps) {

    function onChange(e: RadioChangeEvent) {
        props.onChange(e.target.value);

    };

    return (
        <div className={Styles.sortingContainer}>
            <Radio.Group onChange={onChange} value={props.sortingType}>
                <Space direction="vertical">
                    <Radio value={SortingType.PriceHTL}>Price high to low</Radio>
                    <Radio value={SortingType.PriceLTH}>Price low to high</Radio>
                    <Radio value={SortingType.NTO}>New to old</Radio>
                    <Radio value={SortingType.OTN}>Old to new</Radio>
                </Space>
            </Radio.Group>
        </div>
    );
};