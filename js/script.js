

window.onload = function() {
  document.getElementById("submit").onclick = function(event) {
    event.preventDefault()
    let name = document.getElementById("Name").value;
    let num = document.getElementById("Num").value;
    let outH = document.getElementById("outputH");
    let outP = document.getElementById("outputP");
    let animal = document.getElementById("animal").value;
    let project = document.querySelector('input[name="favProject"]:checked').value;
    outH.innerText = "Hello " + name + " here are your results"
    if (project=== "AI") {
      outP.innerText = "You should learn python"
    } else if (project === "Web") {
      outP.innerText = "You should learn javascript"
    } else if (project === "Style") {
      outP.innerText = "You should learn css"
    } else {
      outP.innerText = "You should select a project"
    }
  };
};