const colorNames = ["purple", "cyan", "sandybrown", "aquamarine"];
const ul = document.querySelector('.color-list')
const colorBox = document.querySelector('.color-box')
const btn = document.getElementById('blu-btn')
const shapes = document.querySelectorAll(".shape-box *");


const displayColors = (colors) => {
  colors.forEach(color => {
    ul.insertAdjacentHTML("beforeend", `<li><a href="">${color}</a></li>`);
  });
}

displayColors(colorNames)

const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(link.innerText)
    shapes.forEach((shape) => {
      shape.style.backgroundColor = link.innerText;
    })
  })
});

btn.addEventListener('click', () => {
  colorBox.classList.toggle('d-none')
})
