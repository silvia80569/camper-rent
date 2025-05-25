import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2>About Us</h2>
        <p>
          We are a 100% Romanian company, passionate about travel and freedom.
          We offer modern, fully-equipped camper rentals to turn your vacation
          into a worry-free adventure.
        </p>

        <div className={styles.aboutFeatures}>
          <div className={styles.feature}>
            <span>🚐</span>
            <h3>Diverse Fleet</h3>
            <p>Campers for families, couples, or small groups.</p>
          </div>
          <div className={styles.feature}>
            <span>🧰</span>
            <h3>Fully Equipped</h3>
            <p>
              Everything you need: kitchen, bathroom, air conditioning, and
              more.
            </p>
          </div>
          <div className={styles.feature}>
            <span>📞</span>
            <h3>24/7 Support</h3>
            <p>We’re here for you anywhere in Romania.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
