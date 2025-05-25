import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <p>
          Email:{" "}
          <a href="mailto:contact@camperrent.ro">contact@camperrent.ro</a>
        </p>
        <p>
          Phone: <a href="tel:+40712345678">+40 712 345 678</a>
        </p>
        <p>Address: Str. Vacntei nr.12, Bucuresti</p>
      </div>
      <div className={styles.socials}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wwwinstagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/40712345678"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Camper Rent Romania. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
