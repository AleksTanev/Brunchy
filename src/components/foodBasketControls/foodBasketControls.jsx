import { useContext, useState } from "react";
import ShoppingBasketIcon from "../shoppingBasketIcon/shoppingBasketIcon";
import styles from "./foodBasketControls.module.scss";
import BasketContext from "../../store/BasketContext";
import { ICON_TYPE } from "../shoppingBasketIcon/constants";
import FoodBasketModal from "../foodBasketModal/foodBasketModal";
import SuccessModal from "../successModal/successModal";

function FoodBasketControls() {
    const basketCtx = useContext(BasketContext);

    const totalBasketPrice = basketCtx.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleOrderNowClick = () => {
        setIsSuccessModalOpen(true);
        setIsBasketModalOpen(false);
        basketCtx.orderItems();
    };

    return (
        <>
            {isBasketModalOpen && <FoodBasketModal handleCloseModal={() => setIsBasketModalOpen(false)} />}
            {isSuccessModalOpen && <SuccessModal handleCloseModal={() => setIsSuccessModalOpen(false)} />}
            <div className={styles.controlsWrapper}>
                <div className={styles.controlsContainer} style={{ zIndex: isBasketModalOpen ? 100 : 0 }}>
                    <div className={styles.controlsContent}>
                        <ShoppingBasketIcon handleClick={() => setIsBasketModalOpen(true)} type={ICON_TYPE.SHOW_BASKET} />
                        <span className={styles.basketPrice}>{totalBasketPrice.toFixed(2)}$</span>
                        <button className="primary-button" onClick={handleOrderNowClick}>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoodBasketControls;
