import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1>Explore Romania in Complete Freedom</h1>
        <p>Rent a fully equipped camper and hit the road without worries.</p>
        <Button onClick={handleClick}>View Catalog</Button>
      </div>
    </section>
  );
};
export default HeroSection;
