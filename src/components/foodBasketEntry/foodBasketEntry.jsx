import styles from "./foodBasketEntry.module.scss";
function FoodBasketEntry({ name, amount }) {
    return (
        <p className={styles.basketEntry}>
            <span>{name}</span>
            <span>
                <span className="highlight">$</span>
                {amount.toFixed(2)}
            </span>
        </p>
    );
}

export default FoodBasketEntry;
