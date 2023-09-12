console.log("yo");

oneScoopContainer = document.querySelector(".oneScoop-container");
twoScoopContainer = document.querySelector(".twoScoop-container");
threeScoopContainer = document.querySelector(".threeScoop-container");

flavourOneImg = document.querySelector(".flavourOneImg");
flavourTwoImg = document.querySelector(".flavourTwoImg");
flavourThreeImg = document.querySelector(".flavourThreeImg");

oneScoopBtn = document.querySelector(".oneScoop");
twoScoopBtn = document.querySelector(".twoScoop");
threeScoopBtn = document.querySelector(".threeScoop");

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
        flavourOneImg.src = `${flavourdata[randomIdex].img}`;
      });

      twoScoopBtn.addEventListener("click", function () {
        reset();
        let randomIdex = Math.floor(Math.random() * 11);
        let randomIdexA = Math.floor(Math.random() * 11);

        oneScoopContainer.innerHTML = flavourdata[randomIdex].glace;
        oneScoopContainer.style.display = "block";
        flavourOneImg.style.display = "block";

        flavourOneImg.src = `${flavourdata[randomIdex].img}`;

        twoScoopContainer.innerHTML = flavourdata[randomIdexA].glace;
        twoScoopContainer.style.display = "block";
        flavourTwoImg.style.display = "block";
        flavourTwoImg.src = `${flavourdata[randomIdexA].img}`;
      });

      threeScoopBtn.addEventListener("click", function () {
        reset();

        let randomIdex = Math.floor(Math.random() * 11);
        let randomIdexA = Math.floor(Math.random() * 11);

        let randomIdexB = Math.floor(Math.random() * 11);

        oneScoopContainer.innerHTML = flavourdata[randomIdex].glace;
        oneScoopContainer.style.display = "block";
        flavourOneImg.style.display = "block";
        flavourOneImg.src = `${flavourdata[randomIdex].img}`;

        twoScoopContainer.innerHTML = flavourdata[randomIdexA].glace;
        twoScoopContainer.style.display = "block";
        flavourTwoImg.style.display = "block";
        flavourTwoImg.src = `${flavourdata[randomIdexA].img}`;

        threeScoopContainer.innerHTML = flavourdata[randomIdexB].glace;
        threeScoopContainer.style.display = "block";
        flavourThreeImg.style.display = "block";
        flavourThreeImg.src = `${flavourdata[randomIdexB].img}`;
      });
    });
});
