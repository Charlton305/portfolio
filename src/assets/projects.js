import skateShopImage from "./images/project-3.png";
import pubWebsiteImage from "./images/Screenshot 2024-01-12 065312.png";
import expenseTrackerImage from "./images/Screenshot 2024-01-03 151630.png";

const projects = [
  {
    title: "Skate shop app",
    textContent:
      "This app is the front-end of an e-commerce store designed to demonstrate my skills and understanding of React, React Router and state management. I gained some valuable experience using React Context in this project and I like the fact that it is fully scalable allowing you to add an unlimited number of products to the catalogue without the need to dig into the code and change the layout. Try adding some items to the basket and check out the results…",
    image: skateShopImage,
    liveSite: "https://skate-shop.surge.sh",
    sourceCode: "https://github.com/Charlton305/e-commerce-project"
  },
  {
    title: "Static pub website",
    textContent:
      "A static website to show my skills in CSS and responsiveness. I decided to go back to basics with this project using only vanilla JavaScript and no frameworks as it had been a while since I had built anything in this way. It was nice to get some more experience in building a front-end project without frameworks and libraries as I believe it is important to have a solid understanding of the fundamentals.",
    image: pubWebsiteImage,
    liveSite: "https://pub-project-305.surge.sh",
    sourceCode: "https://github.com/Charlton305/pub-project"
  },
  {
    title: "Expense tracker app",
    textContent:
      "This is a basic CRUD app which allows you to keep track of your expendature. It was originally built as part of a REACT course using Webpack but I decided to rebuild it using Vite. I learnt a lot of new skills from this project including working with Redux, managing data and user authentication with Googles Firebase API and changing my REACT projects from using class components with Redux connect to using functional components with hooks.",
    image: expenseTrackerImage,
    liveSite: "http://lees-expensify-app.surge.sh",
    sourceCode: "https://github.com/Charlton305/expensify"
  }
];

export { projects };
