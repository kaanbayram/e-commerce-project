import React, { useEffect } from 'react';
import { Header, Content, Footer } from '../';
import * as Styles from "./assets/homeStyles.scss";

export default function Home(props: any) {

    return (
        <div className={Styles.home}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}