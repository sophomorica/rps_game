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
    removeCards()

    userChoice = this.id;

    let image = document.createElement("img");
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
  });
}

const removeCards = () => {
  let removeDiv = document.querySelector(".result");
  while (removeDiv.firstChild) {
    removeDiv.removeChild(removeDiv.firstChild);
  }
};