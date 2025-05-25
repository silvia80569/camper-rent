import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-rent-camper.png";

import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" onClick={closeMenu} className={styles.logo}>
          <img src={logo} alt="Logo Camper Rent" className={styles.logoImage} />
          <span className={styles.logoText}>Camper Rent</span>
        </NavLink>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Catalog
          </NavLink>
          <NavLink
            to="/favorites"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Favorite
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
