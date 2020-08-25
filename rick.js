const Rick = {
  /**
   * Add rickrolling to all links with class `rick`
   * @param {Element} [element] - Link to add rickrolling to
   */
  init: (element) => {
    let elements = [];

    if (element && typeof element == "object") {
      elements = [element];
      console.log(typeof element);
    } else if (element && typeof element == "string") {
      elements = document.querySelectorAll(element);
    } else {
      elements = document.querySelectorAll("a.rick");
    }

    for (i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      });
    }
  },
};
