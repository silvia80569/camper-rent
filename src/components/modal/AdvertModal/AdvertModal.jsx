import Button from "../../Button/Button";

import styles from "./AdvertModal.module.css";

const AdvertModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Button className={styles.closeButton} onClick={onClose}>
          &times;
        </Button>
        {children}
      </div>
    </div>
  );
};

export default AdvertModal;
