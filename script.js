console.log("yo");

oneScoopContainer = document.querySelector(".oneScoop-container");
twoScoopContainer = document.querySelector(".twoScoop-container");
threeScoopContainer = document.querySelector(".threeScoop-container");

flavourOneImg = document.querySelector('.flavourOneImg'); 
flavourTwoImg = document.querySelector('.flavourTwoImg');
flavourThreeImg = document.querySelector('.flavourThreeImg');


oneScoopBtn = document.querySelector(".oneScoop");
twoScoopBtn = document.querySelector(".twoScoop");
threeScoopBtn = document.querySelector(".threeScoop");

document.addEventListener("DOMContentLoaded", function () {
  fetch("flavour.json")
    .then((response) => response.json())
    .then((flavourdata) => {
      console.log(flavourdata);

      oneScoopBtn.addEventListener("click", function () {
        let randomIdex = Math.floor(Math.random() * 11);

        oneScoopContainer.innerHTML = flavourdata[randomIdex].viande;
        oneScoopContainer.style.display = "block";
        flavourOneImg.src = `${flavourdata[randomIdex].img}`;
      });

      twoScoopBtn.addEventListener("click", function () {
        let randomIdex = Math.floor(Math.random() * 11);
        let randomIdexA = Math.floor(Math.random() * 11);

        oneScoopContainer.innerHTML = flavourdata[randomIdex].viande;
        oneScoopContainer.style.display = "block";
        flavourOneImg.src = `${flavourdata[randomIdex].img}`;

        twoScoopContainer.innerHTML = flavourdata[randomIdexA].viande;
        twoScoopContainer.style.display = "block";
        flavourTwoImg.src = `${flavourdata[randomIdexA].img}`;
      });
    });
});
