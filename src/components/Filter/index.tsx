import { Checkbox, Col, Row, Input } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import React, { useState } from 'react';
import * as Styles from './assets/filterStyles.scss';
import { IFilterProps } from "./entities";

const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

export default function Filter(props: IFilterProps) {

    const [searchValue, setSearchValue] = useState<string>("");

    function onChange(checkedValues: CheckboxValueType[]) {
        props.onChange?.(checkedValues);
    };


    /**
     * Used for brand and tag filter
     * you can search your items
     * @returns
     */
    function getItems() {
        return props.items
            .filter((item) => item.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) >= 0)
            .map((item) => {
                return (
                    <Checkbox value={item.id}>{item.name}</Checkbox>
                );
            });
    }

    function onChangeSearchValue(e: any) {
        setSearchValue(e.target.value);
    }

    return (
        <div className={Styles.filterContainer}>
            <Input className={Styles.search} placeholder={"Search brand"} onChange={onChangeSearchValue} />

            <div className={[Styles.scrollbar, props.styles].join(" ")}>
                <Checkbox.Group onChange={onChange}>
                    <Row>
                        <Col span={1}>
                            {getItems()}
                        </Col>
                    </Row>
                </Checkbox.Group>
            </div>
        </div>
    );
}