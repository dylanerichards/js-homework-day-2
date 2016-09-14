document.addEventListener("keypress", function(event) {
  document.getElementById("h1").innerText = String.fromCharCode(event.keyCode);
});
