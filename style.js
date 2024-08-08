let btn = document.querySelector("button");


btn.addEventListener("click", () => {
    let h1 = document.querySelector("h1");
    let color = RandomColor();
    h1.innerText = color;
    let div = document.querySelector("div");
    div.style.backgroundColor = color;
    console.log("Color Updated");
})

function RandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color= `rgb(${red},${green},${blue})`;
    return color;
}