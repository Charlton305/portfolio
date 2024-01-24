import skateShopImage from "./images/project-3.png"
import pubWebsiteImage from "./images/Screenshot 2024-01-12 065312.png"
import expenseTrackerImage from "./images/Screenshot 2024-01-03 151630.png"

const projects = [
  {
    title: "Skate shop app",
    textContent: "some text number 3",
    image: skateShopImage,
    liveSite: "https://skate-shop.surge.sh",
    sourceCode: "https://github.com/Charlton305/e-commerce-project"
  },
  {
    title: "Static pub website",
    textContent: "some text number 2",
    image: pubWebsiteImage,
    liveSite: "https://pub-project-305.surge.sh",
    sourceCode: "https://github.com/Charlton305/pub-project"
  },
  {
    title: "Expense tracker app",
    textContent:
      "This is a basic CRUD app which allows you to keep track of your expendature. It was originally built as part of a REACT course using Webpack but I decided to rebuild it using Vite. I learnt a lot of new skills from this project including working with Redux, managing data and user authentication with Googles Firebase database and changing my REACT projects from using class components with Redux connect to using functional components with hooks.",
    image: expenseTrackerImage,
    liveSite: "http://lees-expensify-app.surge.sh",
    sourceCode: "https://github.com/Charlton305/expensify"
  }
];

export { projects };
