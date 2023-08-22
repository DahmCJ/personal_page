import AboutImg from "./AboutImg";
import AboutContent from "./AboutContent";
import styles from "./AboutLayout.module.css";

function AboutLayout() {
  return (
    <div className={styles.layout}>
      <AboutImg />
      <AboutContent />
    </div>
  );
}

export default AboutLayout;
