import styles from "./foodItem.module.scss";
import { useContext } from "react";
import BasketContext from "../../store/BasketContext";
import ShoppingBasketIcon from "../shoppingBasketIcon/shoppingBasketIcon";
import { ICON_TYPE } from "../shoppingBasketIcon/constants";

function FoodItem({ item }) {
    const basketCtx = useContext(BasketContext);

    const handleAddFoodItemToBasket = () => {
        basketCtx.addItem(item);
    };

    return (
        <div className={styles.foodItem}>
            <div className={styles.imageContainer}>
                <img className={styles.foodImage} src={require(`../../assets/${item.image}`)} alt={item.name} />
            </div>
            <div className={styles.itemDescription}>
                <p className={`${styles.itemHeader} ${styles.descriptionText}`}>{item.name}</p>
                <p className={`${styles.itemCaption} ${styles.descriptionText}`}>{item.caption}</p>
                <p className={styles.descriptionText}>
                    <span className="highlight">$</span>
                    {" " + item.price.toFixed(2)}
                </p>
            </div>
            <ShoppingBasketIcon handleClick={handleAddFoodItemToBasket} type={ICON_TYPE.ADD_TO_BASKET} />
        </div>
    );
}

export default FoodItem;
