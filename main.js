var answerArray = ["rock", "paper", "scissors"];
var userChoice;
var choices = document.getElementsByClassName("choice");
var userView = document.getElementById("user");
var compView = document.getElementById("comp");

answerArray.forEach(function(answer) {
  console.log(answer);
});

for (var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    removeUser();
    removeComp();

    userChoice = this.id;
    compChoice = answerArray[Math.floor(Math.random() * answerArray.length)];

    let image = document.createElement("img");
    image.className = "result_u";
    userView.appendChild(image);
    switch (userChoice) {
      case "rock":
        image.src = `/images/rock.jpeg`;
        break;
      case "paper":
        image.src = `/images/paper.jpeg`;
        break;
      case "scissors":
        image.src = `/images/scissors.png`;
    }
    let compImage = document.createElement("img");
    compImage.className = "result_c";
    compView.appendChild(compImage);
    switch (compChoice) {
      case "rock":
        compImage.src = `/images/rock.jpeg`;
        break;
      case "paper":
        compImage.src = `/images/paper.jpeg`;
        break;
      case "scissors":
        compImage.src = `/images/scissors.png`;
    }

    switch (userChoice) {
      case (userChoice==="rock" && compChoice ==="paper"):
        console.log("lose");
        break;
      case (userChoice==="paper" && compChoice ==="scissors"):
        console.log("lose");
        break;
      case (userChoice==="scissors" && compChoice ==="rock"):
        console.log("lose");
        break;
      case (userChoice==="rock" && compChoice ==="scissors"):
        console.log("win");
        break;

      case (userChoice==="paper"&& compChoice==="rock"):
        console.log("win");
        break;
      case (userChoice==="scissors"&& compChoice === "paper"):
        console.log("win");
        break;
      case (userChoice = compChoice):
        console.log("Draw");
        break;
    }
  });
}

const removeUser = () => {
  let removeDiv = document.querySelector("#user");
  while (removeDiv.firstChild) {
    removeDiv.removeChild(removeDiv.firstChild);
  }
};
const removeComp = () => {
  let removeDiv = document.querySelector("#comp");
  while (removeDiv.firstChild) {
    removeDiv.removeChild(removeDiv.firstChild);
  }
};
