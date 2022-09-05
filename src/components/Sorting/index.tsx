import React, { useState } from "react";
import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';
import * as Styles from './assets/sortingStyles.scss';

export default function Sorting() {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className={Styles.sortingContainer}>
            <Radio.Group onChange={onChange} value={value} >
                <Space direction="vertical">
                    <Radio value={1}>Price low to high</Radio>
                    <Radio value={2}>Price high to low</Radio>
                    <Radio value={3}>New to old</Radio>
                    <Radio value={4}>Old to new</Radio>
                </Space>
            </Radio.Group>
        </div>
    );
};