import styles from "./foodItem.module.scss";

function FoodItem({ image, caption, price, name }) {
    return (
        <div className={styles.foodItem}>
            <div className={styles.imageContainer}>
                <img className={styles.foodImage} src={require(`../../assets/${image}`)} alt={name} />
            </div>
            <div className={styles.itemDescription}>
                <p className={`${styles.itemHeader} ${styles.descriptionText}`}>{name}</p>
                <p className={`${styles.itemCaption} ${styles.descriptionText}`}>{caption}</p>
                <p className={styles.descriptionText}>
                    <span className={styles.highlight}>$</span>
                    {" " + price.toFixed(2)}
                </p>
            </div>
            <div className={styles.iconContainer}>
                <img className={styles.iconImage} src={require("../../assets/shopping-basket.png")} alt="Shopping basket" />
            </div>
        </div>
    );
}

export default FoodItem;
