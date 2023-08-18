const container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.cssText = "color: red;";

container.appendChild(para);

const head3 = document.createElement("h3");
head3.textContent = "I'm a blue h3!";
head3.style.cssText = "color: blue";

container.appendChild(head3);

const div = document.createElement("div");
div.style.cssText = "border-color: black; background-color: pink;";

const head1 = document.createElement("h1");
head1.textContent = "I'm in a div";

div.appendChild(head1);

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

div.appendChild(para2);

container.appendChild(div);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

btn3.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
