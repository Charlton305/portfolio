export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true
};

export const targetElements = [
  {
    element: ".welcome-text-reveal",
    animation: {
      delay: 500,
      distance: "30px",
      origin: window.innerWidth > 900 ? "left" : "bottom"
    }
  },
  {
    element: ".reveal-button-1",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 900 ? "left" : "bottom"
    }
  },
  {
    element: ".reveal-button-2",
    animation: {
      delay: 1300,
      origin: window.innerWidth > 900 ? "left" : "bottom"
    }
  },
  {
    element: ".reveal-button-3",
    animation: {
      delay: 1600,
      origin: window.innerWidth > 900 ? "left" : "bottom"
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
      delay: 600,
      origin: "bottom"
    }
  },
  {
    element: ".about-me__text-container",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 900 ? "left" : "bottom"
    }
  },
  {
    element: ".project-list__heading",
    animation: {
      delay: 300,
      distance: "0px"
    }
  },
  {
    element: ".project__info-container",
    animation: {
      delay: 500,
      origin: window.innerWidth > 900 ? "left" : "bottom"
    }
  },
  {
    element: ".project__img-container",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 900 ? "right" : "bottom"
    }
  },
  {
    element: ".contact",
    animation: {
      delay: 800,
      origin: "bottom"
    }
  }
];
