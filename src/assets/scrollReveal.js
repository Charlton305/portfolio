import ScrollReveal from "scrollreveal";
export default (targetElements, defaultProps) => {
  if (!targetElements.length) return;

  const scrollReveal = ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    scrollReveal.reveal(element, Object.assign({}, defaultProps, animation));
  });
};
