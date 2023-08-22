import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.nav}>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
