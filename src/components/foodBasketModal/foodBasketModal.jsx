import { useContext } from "react";
import BasketContext from "../../store/BasketContext";
import Modal from "../modal/modal";
import FoodBasketEntry from "../foodBasketEntry/foodBasketEntry";
import styles from "./foodBasketModal.module.scss";

function FoodBasketModal({ handleCloseModal }) {
    const basketCtx = useContext(BasketContext);

    const basketTotalPrice = basketCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.quantity;
    }, 0);

    return (
        <Modal handleCloseModal={handleCloseModal}>
            {basketCtx.items.length ? (
                basketCtx.items.map((item) => {
                    return <FoodBasketEntry key={item.id} name={item.name} amount={item.price * item.quantity} />;
                })
            ) : (
                <p>No items in the basket</p>
            )}
            <hr className={styles.line} />
            <FoodBasketEntry name="Total" amount={basketTotalPrice} />
        </Modal>
    );
}

export default FoodBasketModal;
