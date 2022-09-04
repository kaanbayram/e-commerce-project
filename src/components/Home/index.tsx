import React from 'react';
import { Header,Content } from '../';
import * as Styles from "./assets/homeStyles.scss";

export default function Home(props: any) {
    return (
        <div className={Styles.home}>
            <Header />
            <Content />
        </div>
    );
}