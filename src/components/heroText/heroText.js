import styles from "./heroText.module.scss";

function HeroText() {
    return (
        <div className={styles.heroTextContainer}>
            <h1 className={styles.title}>
                The fastest <br className={styles.lineBreak} />
                brunch <br className={styles.lineBreak} />
                delivery in <br className={styles.lineBreak} />
                <span className={`${styles.highlight}`}>Your city</span>
            </h1>
            <p className={styles.description}>
                This is my Exploration for Fruit - Food Delivery Landing Page 🍕.&nbsp;
                <br className={styles.lineBreak} /> How about you ?
            </p>
        </div>
    );
}

export default HeroText;
