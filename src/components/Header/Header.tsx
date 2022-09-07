import React from "react";
import * as Styles from "./assets/headerStyles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from './assets/Logo.png';
import BasketIcon from './assets/basket.png';
import { IHeaderActionProps, IHeaderProps } from "./entities";
import { getPrices } from "../../common";

export function Header(props: IHeaderProps & IHeaderActionProps) {

    /**
     * Open filter drawer for small or medium screens
     */
    function openFilterDrawer() {
        props.changeFilterDrawerStatus(true);
    }

    /**
     * Open basket drawer for small or medium screens
     */
    function openBasketDrawer() {
        props.changeBasketDrawerStatus(true);
    }

    return (
        <>
            <nav className={Styles.nav}>

                <div className={Styles.navBurger}>
                    <button type="button" onClick={openFilterDrawer} >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                <div className={Styles.header}>
                    <img src={Logo} />
                </div>

                <div>

                    <div className={Styles.basketButton} onClick={openBasketDrawer}>
                        <img src={BasketIcon} className={Styles.basketIcon} />
                        <a className={Styles.basketText}>
                            {`₺ ${getPrices(props.basket)}`}
                        </a>
                    </div>

                </div>

            </nav>
        </>
    );
}
