let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

var input = localStorage.getItem("userinput")
console.log(input)

fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    var i;
    for (i=1; i<data.data.length; i++)
    {
        if(input == data.data[i].name){
            console.log(data.data[i].id)
            console.log(data.data[i].name)
            console.log(data.data[i].type)
            console.log(data.data[i].desc)
            console.log(data.data[i].atk)
            console.log(data.data[i].def)
            console.log(data.data[i].level)
            console.log(data.data[i].race)
            console.log(data.data[i].attribute)
            console.log(data.data[i].card_images[0].image_url)
            document.getElementById("cardName").innerHTML = data.data[i].name;
            document.getElementById("cardId").innerHTML = data.data[i].id;
            document.getElementById("cardType").innerHTML = data.data[i].type;
            document.getElementById("cardRace").innerHTML = data.data[i].race;
            document.getElementById("cardAttr").innerHTML = data.data[i].attribute;
            document.getElementById("cardAtk").innerHTML = data.data[i].atk;
            document.getElementById("cardDef").innerHTML = data.data[i].def;
            document.getElementById("cardLevel").innerHTML = data.data[i].level;
            document.getElementById("cardDesc").innerHTML = data.data[i].desc;
            document.getElementById("cardImg").src = data.data[i].card_images[0].image_url
        }
    }
  });


document.addEventListener("submit", function (event) {
    event.preventDefault();

    let searchitem = document.getElementById("cardsearch").value;
    localStorage.setItem("userinput", searchitem);
    location.href = "index1.html"
});