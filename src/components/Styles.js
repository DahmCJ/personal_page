import styles from "./Styles.module.css";
function Styles() {
  return (
    <div className={styles.container}>
      <div className={styles.fancy}></div>
      <div className={styles.switches}>
        <button>click me</button>
      </div>
    </div>
  );
}

export default Styles;
