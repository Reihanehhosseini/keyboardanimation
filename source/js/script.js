let h1Elem = document.querySelector(".title");

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 8) {
    h1Elem.innerHTML = h1Elem.innerHTML.slice(0, -1);
    return;
  }
  h1Elem.innerHTML += event.key;
  let eventKey = event.key.toUpperCase();
  let ElementsItem = document.getElementById(eventKey);

  ElementsItem.classList.add("hit");
  ElementsItem.addEventListener("animationend", function (){
    ElementsItem.classList.remove("hit")
  });
});
