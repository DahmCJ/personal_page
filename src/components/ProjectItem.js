import styles from "./ProjectItem.module.css";
function ProjectItem({ title, description, imgSrc, handleOpen, link }) {
  return (
    <div className={styles.project} onClick={() => handleOpen(link)}>
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ProjectItem;
