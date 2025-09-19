import blogImage from "./images/blog.jpg"
import expenseTrackerImage from "./images/expense-tracker-screenshot.png"
import sCharltonImage from "./images/s-charlton-screenshot.webp"
import papermillImage from "./images/papermill.jpg"

const projects = [
  {
    title: "Local Micropub Website - The Papermill",
    textContent:
      "A website for The Papermill, a local micropub, featuring opening hours, a gallery, and contact details. It also lets the owners manage and update their beers and events to keep customers informed.",
    image: papermillImage,
    liveSite: "https://pub.charltonwebdev.com/",
    altText: "A screenshot of a micropub website.",
  },
  {
    title: "S. Charlton Builders - Local Construction Specialists",
    textContent:
      "This static website was created for a local construction firm to highlight their expertise and showcase completed projects. It provides clear information about the services offered, along with easy access to contact details and social media links.",
    image: sCharltonImage,
    liveSite: "https://s-charlton-builders.charltonwebdev.com",
    altText: "A screenshot of a construction company website.",
  },
  {
    title: "Travel blog",
    textContent:
      "A dynamic website built with a content management system, giving the user full control to publish, update, and manage their own travel stories and photos.",
    image: blogImage,
    liveSite: "https://travel.charltonwebdev.com/",
    altText: "A screenshot of a travel blog website.",
  },
  {
    title: "Expense tracker app",
    textContent:
      "A simple web application built to demonstrate core development skills. Users can log in securely, record their expenses, update or remove entries, and access their saved data on return.",
    image: expenseTrackerImage,
    liveSite: "http://expensify.charltonwebdev.com",
    altText: "A screenshot of an expense tracker app.",
  },
]

export { projects }
