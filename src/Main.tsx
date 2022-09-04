import React, { Component } from "react";
import * as Styles from './index.scss';
import { Provider } from "react-redux";
import createStore from "./redux/createStore";
import { Home } from "./components";
import './index.css';
import 'antd/dist/antd.css'

const store = createStore();

export class Main extends Component<any, any>
{
    constructor(props: any) {
        super(props);


    }

    render() {
        return (
            <>
                <Provider store={store}>
                    <Home />
                </Provider>
            </>
        );
    }
}