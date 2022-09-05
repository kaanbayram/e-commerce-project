import { Checkbox, Col, Row, Input } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import React from 'react';
import * as Styles from './assets/filterStyles.scss';
import { Scrollbars } from 'react-custom-scrollbars-2';

const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

export default function Filter() {

    const onChange = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues);
    };

    

    return (
        <div className={Styles.filterContainer}>
            <Input className={Styles.search} placeholder={"Search brand"} />
            {/* <Scrollbars renderTrackVertical={props => <div id="test" style={{display:"none"}} {...props} className="track-vertical"/>} style={{ height: 142 }}> */}
            <div className={Styles.scrollbar}>
                <Checkbox.Group defaultValue={['A']} onChange={onChange}>
                    <Row>
                        <Col span={1}>
                            <Checkbox value="A">Test</Checkbox>
                            <Checkbox value="B">Test</Checkbox>
                            <Checkbox value="C">Test</Checkbox>
                            <Checkbox value="D">Test</Checkbox>
                            <Checkbox value="E">Test</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
                </div>
            {/* </Scrollbars> */}
        </div>
    );
}