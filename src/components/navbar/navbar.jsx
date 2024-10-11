import deliveryLogo from "../../assets/delivery-driver.png";
import styles from "./navbar.module.scss";

function Navbar() {
    return (
        <header className={styles.navbarContainer}>
            <div className={styles.title}>BRUNCHY</div>
            <nav className={styles.navLinks}>
                <a href="https://dreamshot.bg/">About</a>
                <a href="https://dreamshot.bg/">Call Us</a>
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
