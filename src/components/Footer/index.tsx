import React from 'react';
import * as Styles from "./assets/footerStyles.scss";

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <pre>©2019 Market    •   Privacy Policy</pre>
        </div>
    );
}