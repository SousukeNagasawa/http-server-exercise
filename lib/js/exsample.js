function clickHandler() {
  const box = document.getElementById("box");
  const p = document.createElement("p");
  p.innerText = "pタグが追加されたよん";
  box.appendChild(p);
}