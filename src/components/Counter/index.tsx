import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import React, { useState } from 'react';
import * as Styles from './assets/counterStyles.scss';
import Decrease from "./assets/Decrease.png";
import Increase from "./assets/Increase.png";


export default function Counter(props: any) {

    const [counter, setCounter] = useState<number>(0);

    function onIncrease() {
        setCounter(counter + 1);
    }

    function onDecrease() {
        setCounter(counter - 1);
    }

    return (
        <div className={Styles.container}>

            <div className={Styles.decrease} onClick={onDecrease}>
                <img src={Decrease} />
            </div>

            <div className={Styles.counter}>
                {counter}
            </div>

            <div className={Styles.increase} onClick={onIncrease}>
                <img src={Increase} />
            </div>

        </div>
    );
}