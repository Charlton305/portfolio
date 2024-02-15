export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true
};

export const targetElements = [
  {
    element: ".welcome-text-container",
    animation: {
      delay: 300,
      distance: "30px",
      duration: 1000,
      origin: "left"
    }
  },
  {
    element: ".welcome-button-container",
    animation: {
      delay: 500,
      distance: "30px",
      duration: 1500,
      interval: 200,
      origin: "left"
    }
  },
  {
    element: ".about-me__heading",
    animation: {
      delay: 300,
      distance: "0px"
    }
  },
  {
    element: ".about-me__img-container",
    animation: {
      delay: 300,
      duration: 1000
    }
  },
  {
    element: ".about-me__text-container",
    animation: {
      delay: 300,
      duration: 1000,
      origin: "left"
    }
  },
  {
    element: ".project-list__heading",
    animation: {
      delay: 300,
      duration: 1000
    }
  },
  {
    element: ".project__info-container",
    animation: {
      delay: 300,
      duration: 1000
    }
  },
  {
    element: ".project__img-container",
    animation: {
      delay: 300,
      duration: 1000
    }
  }
];
