import myLittleFrenchieimage from "./images/my-little-frenchie.jpg";
import blogImage from "./images/blog.jpg";
import expenseTrackerImage from "./images/expense-tracker-screenshot.png";
import sCharltonImage from "./images/s-charlton-screenshot.jpg";

const projects = [
  {
    title: "My Little Frenchie - Pet sitting business",
    textContent:
      "I was asked by my client, Shannon, to design and build a website for her pet sitting business. She provided me with a base colour pink and some photos then let me get to work, providing input on certain aspects as the project progressed. The goal of the website was to act as a front for her business, providing potential clients with details and a way to get in contact with her. I also included a way for her to easily add blog posts and update images to keep her furry friends owners up to date!",
    image: myLittleFrenchieimage,
    liveSite: "https://mylittlefrenchie.co.uk/",
    altText: "A screenshot of a dog sitting website."
  },
  {
    title: "Travel blog",
    textContent:
      "A blog website created with a CMS to give the user the ability to add and edit their own blog posts and images.",
    image: blogImage,
    liveSite: "https://blog-8b3d49.webflow.io/",
    altText: "A screenshot of a travel blog website."

  },
  {
    title: "S.Charlton Builders - Construction business",
    textContent:
      "This is a static website built for a local construction firm designed to showcase their work and provide details on the services they provide aswell as contact details and social media links.",
    image: sCharltonImage,
    liveSite: "https://s-charlton-builders.charltonwebdev.com",
    altText: "A screenshot of a construction company website."
  },
  {
    title: "Expense tracker app",
    textContent:
      "This is a basic expense tracker app designed to showcase my skills as a web developer. It allows the user to login, to add, update and delete expenses and to retrieve any existing data when they return to the app.",
    image: expenseTrackerImage,
    liveSite: "http://expensify.charltonwebdev.com",
    altText: "A screenshot of an expense tracker app."

  }
];

export { projects };
