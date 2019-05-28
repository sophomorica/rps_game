var answerArray = ["rock", "paper", "scissors"];
var userChoice;
var choices = document.getElementsByClassName("choice")
var userView = document.getElementById("user")
var compView = document.getElementById("comp")

answerArray.forEach(function(answer){
console.log(answer)
})

for (var i = 0; i < choices.length; i++){
  choices[i].addEventListener("click", function(){
    userChoice = this.id 
    switch(userChoice){
      case "rock":
      userView.classList = "rock"
      break
      case "paper":
      userView.classList = "paper"
      break
      case "scissors":
      userView.classList = "scissors"

    }

  })
}

