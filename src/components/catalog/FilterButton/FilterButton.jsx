import styles from "./FilterButton.module.css";

const FilterButton = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      type="button"
      className={`${styles.filterButton} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.icon}>{icon}</div>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default FilterButton;
