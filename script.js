console.log("yo");

const oneScoopContainer = document.querySelector(".oneScoop-container");
const twoScoopContainer = document.querySelector(".twoScoop-container");
const threeScoopContainer = document.querySelector(".threeScoop-container");

const flavourOneImg = document.querySelector(".flavourOneImg");
const flavourTwoImg = document.querySelector(".flavourTwoImg");
const flavourThreeImg = document.querySelector(".flavourThreeImg");

const oneScoopBtn = document.querySelector(".oneScoop");
const twoScoopBtn = document.querySelector(".twoScoop");
const threeScoopBtn = document.querySelector(".threeScoop");


function reset() {
  oneScoopContainer.style.display = "none";
  twoScoopContainer.style.display = "none";
  threeScoopContainer.style.display = "none";
  flavourOneImg.style.display = "none";
  flavourTwoImg.style.display = "none";
  flavourThreeImg.style.display = "none";

}

document.addEventListener("DOMContentLoaded", function () {
  fetch("flavour.json")
    .then((response) => response.json())
    .then((flavourdata) => {
      console.log(flavourdata);

      oneScoopBtn.addEventListener("click", function () {
        reset();

        
        let randomIdex = Math.floor(Math.random() * 11);
      
        oneScoopContainer.innerHTML = flavourdata[randomIdex].glace;
        oneScoopContainer.style.display = "block"; 
        flavourOneImg.style.display = "block";
        flavourOneImg.style.backgroundImage = `url(${flavourdata[randomIdex].img})`;
        oneScoopContainer.classList.add("animate__animated", "animate__jackInTheBox");

        oneScoopContainer.addEventListener('animationend', () => {
          oneScoopContainer.classList.remove("animate__animated", "animate__jackInTheBox");
        })
        
      });

      twoScoopBtn.addEventListener("click", function () {
        reset();
        let randomIdex = Math.floor(Math.random() * 11);
        let randomIdexA = Math.floor(Math.random() * 11);

        oneScoopContainer.innerHTML = flavourdata[randomIdex].glace;
        oneScoopContainer.style.display = "block";
        flavourOneImg.style.display = "block";
        flavourOneImg.style.backgroundImage = `url(${flavourdata[randomIdex].img})`;
        oneScoopContainer.classList.add("animate__animated", "animate__jackInTheBox");

        twoScoopContainer.innerHTML = flavourdata[randomIdexA].glace;
        twoScoopContainer.style.display = "block";
        flavourTwoImg.style.display = "block";
        flavourTwoImg.style.backgroundImage = `url(${flavourdata[randomIdexA].img})`;
        twoScoopContainer.classList.add("animate__animated", "animate__jackInTheBox");

        oneScoopContainer.addEventListener('animationend', () => {
          oneScoopContainer.classList.remove("animate__animated", "animate__jackInTheBox");
        })
        twoScoopContainer.addEventListener('animationend', () => {
          twoScoopContainer.classList.remove("animate__animated", "animate__jackInTheBox");
        })
        
      });

      threeScoopBtn.addEventListener("click", function () {
        reset();

        let randomIdex = Math.floor(Math.random() * 11);
        let randomIdexA = Math.floor(Math.random() * 11);

        let randomIdexB = Math.floor(Math.random() * 11);

        oneScoopContainer.innerHTML = flavourdata[randomIdex].glace;
        oneScoopContainer.style.display = "block";
        flavourOneImg.style.display = "block";
        flavourOneImg.style.backgroundImage = `url(${flavourdata[randomIdex].img})`;
        oneScoopContainer.classList.add("animate__animated", "animate__jackInTheBox");


        oneScoopContainer.addEventListener('animationend', () => {
          oneScoopContainer.classList.remove("animate__animated", "animate__jackInTheBox");
        })

        twoScoopContainer.innerHTML = flavourdata[randomIdexA].glace;
        twoScoopContainer.style.display = "block";
        flavourTwoImg.style.display = "block";
        flavourTwoImg.style.backgroundImage = `url(${flavourdata[randomIdexA].img})`;
        twoScoopContainer.classList.add("animate__animated", "animate__jackInTheBox");
        twoScoopContainer.addEventListener('animationend', () => {
          twoScoopContainer.classList.remove("animate__animated", "animate__jackInTheBox");
        })

        threeScoopContainer.innerHTML = flavourdata[randomIdexB].glace;
        threeScoopContainer.style.display = "block";
        flavourThreeImg.style.display = "block";
        flavourThreeImg.style.backgroundImage = `url(${flavourdata[randomIdexB].img})`;
        threeScoopContainer.classList.add("animate__animated", "animate__jackInTheBox");

        threeScoopContainer.addEventListener('animationend', () => {
          threeScoopContainer.classList.remove("animate__animated", "animate__jackInTheBox");
        })

      });
    });
});
