import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.leftSide}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <ul className={styles.rightSide}>
        <li>11</li>
        <li>22</li>
        <li>33</li>
      </ul>
    </div>
  );
}

export default Footer;
