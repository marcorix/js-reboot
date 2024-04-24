const colorNames = ["purple", "cyan", "sandybrown", "aquamarine"];
const ul = document.querySelector(".color-list");
const btn = document.querySelector("button");
const shapes = document.querySelectorAll(".shape-box > *");

const displayColors = (colors) => {
  colors.forEach((color) => {
    ul.insertAdjacentHTML("beforeend", `<li><a href="#">${color}</a></li>`);
  });
}

displayColors(colorNames)

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener('click', () => {
    // grab all the shapes
    // change the background-color of all of them
    shapes.forEach((shape) => {
      shape.style.backgroundColor = link.innerText;
    })

  })
})

btn.addEventListener('click', () => {
  ul.classList.toggle('d-none')
})
