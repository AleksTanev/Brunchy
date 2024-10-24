import shoppingBasketIcon from "../../assets/shopping-basket.png";
import { ICON_TYPE } from "./constants";
import styles from "./shoppingBasketIcon.module.scss";

function ShoppingBasketIcon({ handleClick, type }) {
    const basketStyle = type === ICON_TYPE.ADD_TO_BASKET ? `${styles.iconContainer} ${styles.addToBasket}` : `${styles.iconContainer} ${styles.showBasket}`;
    return (
        <div className={basketStyle} onClick={handleClick}>
            <img className={styles.iconImage} src={shoppingBasketIcon} alt="Shopping basket icon" />
        </div>
    );
}

export default ShoppingBasketIcon;
