document
  .getElementById("LandingSection")
  .addEventListener("mousemove", (event) => {
    let XPos = +event.clientX / +window.innerWidth;
    let YPos = +event.clientY / +window.innerHeight;
    document.getElementById("__TheChair").style.transform = `translate(${
      2 * -XPos
    }rem, ${7 - 2 * YPos}rem)`;
    document.getElementById("__TheLamp").style.transform = `translate(${
      -9 + 3 * XPos
    }rem, ${1 + 2 * YPos}rem)`;
  });
