import skateShopImage from "./images/project-3.png";
import pubWebsiteImage from "./images/Screenshot 2024-01-12 065312.png";
import expenseTrackerImage from "./images/Screenshot 2024-01-03 151630.png";

const projects = [
  {
    title: "Skate shop app",
    textContent:
      "This is a front end e-commerce store designed to show my skills in and undestanding of React. In this project I used React router to handle the routing and React Context to handle state management. Making use of Reacts reuseable components makes it easy for the website owner to add and remove items from their catalogue.",
    image: skateShopImage,
    liveSite: "https://skate-shop.charltonwebdev.com",
    sourceCode: "https://github.com/Charlton305/e-commerce-project"
  },
  {
    title: "Static pub website",
    textContent:
      "A static website to show my skills in CSS and responsiveness. I decided to go back to basics with this project using only vanilla HTML, CSS and JavaScript without the use of any frameworks or libraries. It was nice to get some more experience in building a front-end project in this way as I believe it is important to have a solid understanding of the fundamentals to use alongside the frameworks.",
    image: pubWebsiteImage,
    liveSite: "https://white-horse.charltonwebdev.com",
    sourceCode: "https://github.com/Charlton305/pub-project"
  },
  {
    title: "Expense tracker app",
    textContent:
      "This is a basic CRUD app which allows you to keep track of your expendature. It was originally built as part of a REACT course using Webpack but I decided to rebuild it using Vite. I learnt a lot of new skills from this project including working with Redux, managing data and user authentication with Googles Firebase API and changing my REACT projects from using class components with Redux connect to using functional components with hooks.",
    image: expenseTrackerImage,
    liveSite: "http://expensify.charltonwebdev.com",
    sourceCode: "https://github.com/Charlton305/expensify"
  }
];

export { projects };
