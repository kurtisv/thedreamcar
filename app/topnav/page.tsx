import styles  from "../../styles/global.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <h1 className={styles.navbarTitle}>Cars</h1>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <a href="/" className={styles.navbarLink}>
              Home
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/about" className={styles.navbarLink}>
              About
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/contact" className={styles.navbarLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}