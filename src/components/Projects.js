import ProjectItem from "./ProjectItem";
import styles from "./Projects.module.css";

function Projects({ data }) {
  function handleOpen(link) {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }
  return (
    <div className={styles.projectContainer}>
      {data.map((item, i) => (
        <ProjectItem
          title={item.title}
          description={item.description}
          imgSrc={item.imgSrc}
          key={i}
          link={item.link}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
}

export default Projects;
