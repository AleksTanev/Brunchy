import styles from "./foodItem.module.scss";
import icon from "../../assets/shopping-basket.png";
import { useContext } from "react";
import BasketContext from "../../store/BasketContext";

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
                    <span className={styles.highlight}>$</span>
                    {" " + item.price.toFixed(2)}
                </p>
            </div>
            <div className={styles.iconContainer} onClick={handleAddFoodItemToBasket}>
                <img className={styles.iconImage} src={icon} alt="Add to shopping basket icon" />
            </div>
        </div>
    );
}

export default FoodItem;
