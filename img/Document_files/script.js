console.log("yo");

const viande = document.getElementById("viande");
const viandeimg = document.querySelector('.imgviande');

const sauce = document.getElementById("sauce");
const sauceimg = document.querySelector(".imgsauce"); 

const fleche = document.querySelector('.fleche'); 

const generator = document.getElementById('generator'); 

document.addEventListener("DOMContentLoaded", function () {
  fetch("viande.json")
    .then((response) => response.json())
    .then((viandedata) => {
      console.log(viandedata);

    
    generator.addEventListener('click', function() {

        let randomIdex =  Math.floor(Math.random() * 11); 

        viande.innerHTML = viandedata[randomIdex].viande; 
        viande.style.display ="block"; 
        viandeimg.src = `${viandedata[randomIdex].img}`; 

        fleche.style.display ="block"; 

    }); 
    
    
      
    
    });
});


document.addEventListener("DOMContentLoaded", function () {
  fetch("sauce.json")
    .then((response) => response.json())
    .then((saucedata) => {
      console.log(saucedata);

      generator.addEventListener('click', function() {

        let randomIdex =  Math.floor(Math.random() * 11); 

        sauce.innerHTML = saucedata[randomIdex].sauce; 
        sauce.style.display="block"; 
        sauceimg.src = `${saucedata[randomIdex].img}`

    }); 

    });
});




