import styles from "./modal.module.scss";

function Modal({ children, handleCloseModal }) {
    return (
        <div className={styles.modalBackdrop} onClick={handleCloseModal}>
            <div
                className={styles.modalContainer}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
