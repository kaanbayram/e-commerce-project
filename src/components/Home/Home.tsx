import { Spin } from 'antd';
import React from 'react';
import { Header, Content, Footer } from '../';
import * as Styles from "./assets/homeStyles.scss";
import { IHomeProps } from './entities';

export function Home(props: IHomeProps) {

    return (
        <Spin size="large" spinning={props.loading}>
            <div className={Styles.home}>
                <Header />
                <Content />
                <Footer />
            </div>
        </Spin>
    );
}