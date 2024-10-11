import Modal from "../modal/modal";
import styles from "./successModal.module.scss";

function SuccessModal({ handleCloseModal }) {
    return (
        <Modal handleCloseModal={handleCloseModal}>
            <p className={`highlight ${styles.messageHeader}`}>Congratulations!</p>
            <p className={styles.secondaryText}>Your order is on its way</p>
            <button className="primaryButton" onClick={handleCloseModal}>
                Ok
            </button>
        </Modal>
    );
}

export default SuccessModal;
