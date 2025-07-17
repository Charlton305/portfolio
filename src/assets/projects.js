import blogImage from "./images/blog.jpg"
import expenseTrackerImage from "./images/expense-tracker-screenshot.png"
import sCharltonImage from "./images/s-charlton-screenshot.webp"

const projects = [
  {
    title: "S.Charlton Builders - Construction firm",
    textContent:
      "This is a static website built for a local construction firm designed to showcase their work and provide details on the services they provide aswell as contact details and social media links.",
    image: sCharltonImage,
    liveSite: "https://s-charlton-builders.charltonwebdev.com",
    altText: "A screenshot of a construction company website.",
  },
  {
    title: "Travel blog",
    textContent:
      "A blog website created with a CMS to give the user the ability to add and edit their own blog posts and images.",
    image: blogImage,
    liveSite: "https://travel.charltonwebdev.com/",
    altText: "A screenshot of a travel blog website.",
  },
  {
    title: "Expense tracker app",
    textContent:
      "This is a basic expense tracker app designed to showcase my skills as a web developer. It allows the user to login, to add, update and delete expenses and to retrieve any existing data when they return to the app.",
    image: expenseTrackerImage,
    liveSite: "http://expensify.charltonwebdev.com",
    altText: "A screenshot of an expense tracker app.",
  },
]

export { projects }
