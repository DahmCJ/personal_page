import styles from "./Projects.module.css";
function Projects() {
  function handleOpen() {
    console.log("hello");
  }
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.projectContainer}>
        <div className={styles.project} onClick={handleOpen}>
          <h4>Forkify</h4>
          <img src="../images/forkify.png" alt="forkify app" />
          <p>Search over 1,000,000 recipes on this web application. </p>
        </div>
        <div className={styles.project}>
          <h4>Far Away</h4>
          <img src="../images/faraway.png" alt="Packing list app" />
          <p>
            Get ready for your next trip with this packing list application.
            Check items off to remove them from your list or organize them how
            you would like!{" "}
          </p>
        </div>
        <div className={styles.project}>
          <h4>React Pizza Co.</h4>
          <img src="../images/menu.png" alt="React pizza Co." />
          <p>
            Hungry for some pizza? Order your favorite pizza from React Pizza
            Co. before they're all sold out.
          </p>
        </div>
        <div className={styles.project}>
          <h4>Splitwise</h4>
          <img src="../images/bill.png" alt="Splitwise app" />
          <p>
            Need to split a bill with a friend? Use this bill splitting app to
            keep track of who owes you money.
          </p>
        </div>
        <div className={styles.project}>
          <h4>Popcorn</h4>
          <img src="../images/usePopcorn.png" alt="Popcorn" />
          <p>
            Want an application to keep track of which movies you have watched
            and what you thought of them? Then UsePopcorn is the application for
            you. Search through our application for movies that you have watched
            and leave a review for you to look back to at a later time.
          </p>
        </div>
        <div className={styles.project}>
          <h4>Project 6</h4>
          <img src="../images/worldwise.png" alt="Worldwise app" />
          <p>
            Keep track of which countries and cities you have traveled to. With
            Worldwise you can share when you went to a certain city in a country
            and leave notes about your time there. Use our interactive map to
            mark your travels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
