import blogImage from './images/blog.jpg'
import blogImage2x from './images/blog-2x.jpg'

import sCharltonImage from './images/s-charlton-screenshot.jpg'
import sCharltonImage2x from './images/s-charlton-screenshot-2x.jpg'

import papermillImage from './images/papermill.jpg'
import papermillImage2x from './images/papermill-2x.jpg'

import pinballImage from './images/pinball-screenshot.png'
import pinballImage2x from './images/pinball-screenshot-2x.png'

import pAndLReviewsImage from './images/p&l.jpg'
import pAndLReviewsImage2x from './images/p&l2x.jpg'

import rowburImage from './images/rowbur.jpg'
import rowburImage2x from './images/rowbur2x.jpg'

const projects = [
  {
    title: 'P and L Reviews - Rock & Metal Music Platform',
    textContent:
      "A rock and metal review website I built for a client who's passionate about music. They can add new album reviews and artist interviews themselves using a headless CMS setup, so they're never waiting on me to update content. Everything's coded from scratch to keep it fast and clean.",
    image: pAndLReviewsImage,
    image2x: pAndLReviewsImage2x,
    liveSite: 'https://pandltunes.co.uk/',
    altText: 'Screenshot of P and L Reviews music website.',
  },
  {
    title: 'Rowbur Services - Automated Gate Specialists',
    textContent:
      "A website for a gate automation company operating across Sussex and Kent. I built this to showcase their work and make it easy for potential customers to see what they do and get in touch. It's a straightforward site that does exactly what they need - shows off their installations and gets them enquiries.",
    image: rowburImage,
    image2x: rowburImage2x,
    liveSite: 'https://www.rowburservicesltd.co.uk/',
    altText: 'Screenshot of Rowbur Services automated gates website.',
  },
  {
    title: 'Pinball Club Leaderboard App',
    textContent:
      'A web app designed for a local pinball club to track player scores and maintain competitive rankings. Features include secure user authentication, score submission, and dynamic leaderboards that encourage friendly competition. A test database has been set up specifically for portfolio visitors so feel free to create an account and submit scores to explore the full functionality!',
    image: pinballImage,
    image2x: pinballImage2x,
    liveSite: 'https://2402671a.pinball-6g1.pages.dev/',
    altText: 'Screenshot of the pinball club leaderboard application.',
  },
  {
    title: 'Local Micropub Website - The Papermill',
    textContent:
      'A website for The Papermill, a local micropub, featuring opening hours, a gallery, and contact details. It also lets the owners manage and update their beers and events to keep customers informed.',
    image: papermillImage,
    image2x: papermillImage2x,
    liveSite: 'https://thepapermillmicropub.co.uk/',
    altText: 'A screenshot of a micropub website.',
  },
  // {
  //   title: 'S. Charlton Builders - Local Construction Specialists',
  //   textContent:
  //     'This static website was created for a local construction firm to highlight their expertise and showcase completed projects. It provides clear information about the services offered, along with easy access to contact details and social media links.',
  //   image: sCharltonImage,
  //   image2x: sCharltonImage2x,
  //   liveSite: 'https://s-charlton-builders.charltonwebdev.com',
  //   altText: 'A screenshot of a construction company website.',
  // },
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
