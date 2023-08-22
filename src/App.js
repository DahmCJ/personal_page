import AboutLayout from "./components/AboutLayout";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Styles from "./components/Styles";

const projects = [
  {
    title: "Forkify",
    description: "Search over 1,000,000 recipes on this web application.",
    imgSrc: "../images/forkify.png",
    link: "https://github.com/DahmCJ/forkify",
  },
  {
    title: "Far Away",
    description:
      "Get ready for your next trip with this packing list application. Check items off to remove them from your list or organize them how you would like!",
    imgSrc: "../images/faraway.png",
    link: "https://github.com/DahmCJ/far-away",
  },
  {
    title: "React Pizza Co.",
    description:
      "Hungry for some pizza? Order your favorite pizza from React Pizza Co. before they're all sold out.",
    imgSrc: "../images/menu.png",
    link: "https://github.com/DahmCJ",
  },
  {
    title: "Splitwise",
    description:
      "Need to split a bill with a friend? Use this bill splitting app to keep track of who owes you money.",
    imgSrc: "../images/bill.png",
    link: "https://github.com/DahmCJ",
  },
  {
    title: "Popcorn",
    description:
      "Want an application to keep track of which movies you have watched and what you thought of them? Then UsePopcorn is the application for you. Search through our application for movies that you have watched and leave a review for you to look back to at a later time.",
    imgSrc: "../images/usePopcorn.png",
    link: "https://github.com/DahmCJ",
  },
  {
    title: "Worldwise",
    description:
      "Keep track of which countries and cities you have traveled to. With Worldwise you can share when you went to a certain city in a country and leave notes about your time there. Use our interactive map to mark your travels.",
    imgSrc: "../images/worldwise.png",
    link: "https://github.com/DahmCJ",
  },
];

export default function App() {
  return (
    <div>
      <NavBar />
      <AboutLayout />
      <Projects data={projects} />
      {/*  <Styles /> */}
      <Footer />
    </div>
  );
}
