

window.onload = function() {
  document.getElementById("clear").onclick = function(event) {
    event.preventDefault();
    let link = document.getElementById("link");
    let outH = document.getElementById("outputH");
    let outP = document.getElementById("outputP");
    outH.innerText = "";
    outP.innerText = "";
    link.innerText = "";
    link.setAttribute("href", "#");
  };
  document.getElementById("submit").onclick = function(event) {
    event.preventDefault();
    let link = document.getElementById("link");
    let name = document.getElementById("Name").value;
    let outH = document.getElementById("outputH");
    let outP = document.getElementById("outputP");
    let project = document.querySelector('input[name="favProject"]:checked').value;
    outH.innerText = "Hello " + name + " here are your results";
    if (project=== "AI") {
      outP.innerText = "You should learn Python";
      link.setAttribute("href" , "https://www.python.org/about/gettingstarted/");
      link.innerText = "You can learn about it here!";
    } else if (project === "Web") {
      outP.innerText = "You should learn Javascript";
      link.setAttribute("href" , "https://www.w3schools.com/js/");
      link.innerText = "You can learn about it here!";
    } else if (project === "Style") {
      outP.innerText = "You should learn CSS ";
      link.setAttribute("href" , "https://www.w3schools.com/css/");
      link.innerText = "You can learn about it here!";
    } else {
      outP.innerText = "You should select a project"
    }
  };
};