import blogImage from './images/blog.jpg'
import blogImage2x from './images/blog-2x.jpg'

import sCharltonImage from './images/s-charlton-screenshot.jpg'
import sCharltonImage2x from './images/s-charlton-screenshot-2x.jpg'

import papermillImage from './images/papermill.jpg'
import papermillImage2x from './images/papermill-2x.jpg'

import pinballImage from './images/pinball-screenshot.png'
import pinballImage2x from './images/pinball-screenshot-2x.png'

const projects = [
  {
    title: 'Local Micropub Website - The Papermill',
    textContent:
      'A website for The Papermill, a local micropub, featuring opening hours, a gallery, and contact details. It also lets the owners manage and update their beers and events to keep customers informed.',
    image: papermillImage,
    image2x: papermillImage2x,
    liveSite: 'https://pub.charltonwebdev.com/',
    altText: 'A screenshot of a micropub website.',
  },
  {
    title: 'Pinball Club Leaderboard App',
    textContent:
      'A web app designed for a local pinball club to track player scores and maintain competitive rankings. Features include secure user authentication, score submission, and dynamic leaderboards that encourage friendly competition. A test database has been set up specifically for portfolio visitors so feel free to create an account and submit scores to explore the full functionality!',
    image: pinballImage,
    image2x: pinballImage2x,
    liveSite: 'https://pinball.charltonwebdev.com/',
    altText: 'Screenshot of the pinball club leaderboard application.',
  },
  {
    title: 'S. Charlton Builders - Local Construction Specialists',
    textContent:
      'This static website was created for a local construction firm to highlight their expertise and showcase completed projects. It provides clear information about the services offered, along with easy access to contact details and social media links.',
    image: sCharltonImage,
    image2x: sCharltonImage2x,
    liveSite: 'https://s-charlton-builders.charltonwebdev.com',
    altText: 'A screenshot of a construction company website.',
  },
  {
    title: 'Travel blog',
    textContent:
      'A dynamic website built with a content management system, giving the user full control to publish, update, and manage their own travel stories and photos.',
    image: blogImage,
    image2x: blogImage2x,
    liveSite: 'https://travel.charltonwebdev.com/',
    altText: 'A screenshot of a travel blog website.',
  },
]

export { projects }
