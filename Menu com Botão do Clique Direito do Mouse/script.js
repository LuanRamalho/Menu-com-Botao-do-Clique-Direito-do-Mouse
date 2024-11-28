const customMenu = document.getElementById("customMenu");
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  //Set positiom of the custom menu to where user clicked
  customMenu.style.top = `${event.pageY}px`;
  customMenu.style.left = `${event.pageX}px`;
  customMenu.style.display = "block";
});
document.addEventListener("click", () => {
  customMenu.style.display = "none";
});
