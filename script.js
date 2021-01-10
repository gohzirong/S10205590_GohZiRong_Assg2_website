document.addEventListener("submit", function (event) {
    event.preventDefault();

    let searchitem = document.getElementById("cardsearch").value;
    localStorage.setItem("userinput", searchitem);
    location.href = "index1.html"
  });