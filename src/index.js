import "@/assets/css/style.css";
import "@/assets/css/scss.scss";
import Icon from "@images/cog.svg";
import printMe from "@/print";


function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello, webpack";

  const newImg = new Image();
  newImg.src = Icon;
  element.appendChild(newImg);

  btn.innerHTML = "Click me and check the!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
