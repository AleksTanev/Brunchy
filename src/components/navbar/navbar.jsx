import deliveryLogo from "../../assets/delivery-driver.png";
import styles from "./navbar.module.scss";

function Navbar() {
    return (
        <header className={styles.navbarContainer}>
            <div className={styles.title}>BRUNCHY</div>
            <nav className={styles.navLinks}>
                <div className={styles.linkButton} onClick={() => console.log("About")}>
                    About
                </div>
                <div className={styles.linkButton} onClick={() => console.log("Call us")}>
                    Call Us
                </div>
                <div className={styles.pillBox}>
                    <div>Free Delivery</div>
                    <div className={styles.pillBoxImageContainer}>
                        <img className={styles.pillBoxImage} alt="Food delivery driver" src={deliveryLogo} />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
