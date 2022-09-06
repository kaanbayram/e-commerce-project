import React, { useState } from 'react';
import * as Styles from './assets/counterStyles.scss';
import Decrease from "./assets/Decrease.png";
import Increase from "./assets/Increase.png";
import { ICounterActionProps, ICounterProps } from './entities';


export default function Counter(props: ICounterProps & ICounterActionProps) {


    function onIncrease() {
        props.onIncrease();
    }

    function onDecrease() {
        props.onDecrease();
    }

    return (
        <div className={Styles.container}>

            <div className={Styles.decrease} onClick={onDecrease}>
                <img src={Decrease} />
            </div>

            <div className={Styles.counter}>
                {props.count}
            </div>

            <div className={Styles.increase} onClick={onIncrease}>
                <img src={Increase} />
            </div>

        </div>
    );
}