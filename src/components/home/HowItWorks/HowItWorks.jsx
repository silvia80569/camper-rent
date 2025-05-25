import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.hiwContainer}>
        <h2>How it works</h2>
        <div className={styles.hiwSteps}>
          <div className={styles.step}>
            <span>1️⃣</span>
            <h3>Choose the right camper</h3>
            <p>
              Browse our catalog and find the camper that best suits your needs.
            </p>
          </div>
          <div className={styles.step}>
            <span>2️⃣</span>
            <h3>Book online</h3>
            <p>Fill out the booking form directly in the app.</p>
          </div>
          <div className={styles.step}>
            <span>3️⃣</span>
            <h3>Hit the road</h3>
            <p>
              Pick up your camper and enjoy the freedom of a vacation on wheels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
