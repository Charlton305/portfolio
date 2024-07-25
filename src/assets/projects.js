import myLittleFrenchieimage from "./images/my-little-frenchie.png";
import pubWebsiteImage from "./images/Screenshot 2024-01-12 065312.png";
import expenseTrackerImage from "./images/Screenshot 2024-01-03 151630.png";

const projects = [
  {
    title: "My Little Frenchie - pet sitting website",
    textContent:
      "I was asked by my client Shannon to design and build a website for her pet sitting business. She provided me with a base colour pink and some photos then let me get to work, providing input on certain aspects as the project progressed. The goal of the website was to act as a front for her business, providing potential clients with details and a way to get in contact with her. I also included a way for her to easily add blog posts and update images to keep her furry friends owners up to date!",
    image: myLittleFrenchieimage,
    liveSite: "https://my-little-frenchie.webflow.io/",
  },
  {
    title: "Expense tracker app",
    textContent:
      "This is a basic expense tracker app designed to showcase my skills as a web developer. It allows the user to login, to add, update and delete expenses and to retrieve any existing data when they return to the app.",
    image: expenseTrackerImage,
    liveSite: "http://expensify.charltonwebdev.com",
    sourceCode: "https://github.com/Charlton305/expensify"
  }
];

export { projects };
