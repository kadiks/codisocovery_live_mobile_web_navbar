let bodyEl = null;
let navEl = null;

const init = () => {
  bodyEl = document.querySelector("body");
  navEl = document.querySelector("nav");

  navEl.addEventListener("click", ({ target }) => {
    console.log("target", target);
    const anchorEl = target.closest("a");
    if (anchorEl === null) {
      console.log("stop code");
      return;
    }
    const bodyClass = anchorEl.className;
    bodyEl.setAttribute("class", bodyClass);
  });
  //   navEl.addEventListener("click", (event) => {
  //     const target = event.target;
  //   });
};

// window.onload = init;
window.addEventListener("load", init);
