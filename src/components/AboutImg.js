import styles from "./AboutImg.module.css";

function AboutImg() {
  return (
    <div>
      <img
        className={styles.img}
        src="../images/portrait.jpg"
        // width={500}
        // height={500}
        alt="portrait"
      />
    </div>
  );
}

export default AboutImg;
