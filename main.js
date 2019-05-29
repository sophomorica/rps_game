var answerArray = ["rock", "paper", "scissors"];
var userChoice;
var choices = document.getElementsByClassName("choice");
var userView = document.getElementById("user");
var compView = document.getElementById("comp");
var answer = document.createElement("h1")
answer.id = "answer"
var the_answer = document.getElementById("the_answer")
var counter = document.createElement("p")
counter.id = "counter"



for (var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    removeUser();
    removeComp();

    userChoice = this.id;
    compChoice = answerArray[Math.floor(Math.random() * answerArray.length)];
    
    counter.textContent = 0
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


      if (userChoice==="rock" && compChoice ==="paper"){
        answer.className = "red"
        answer.textContent = (userChoice+" suffocated by "+ compChoice+": you LOSE!!!!")
        the_answer.appendChild(answer)
        
        
      }
      if (userChoice==="paper" && compChoice ==="scissors"){ 
        answer.className = "red"
        answer.textContent = (userChoice+" cut by "+ compChoice+": you LOSE!!!!")
        the_answer.appendChild(answer)
      }
      if (userChoice==="scissors" && compChoice ==="rock"){ 
        answer.className = "red"
        answer.textContent = (userChoice+" crushed by "+ compChoice+": you LOSE!!!!")
        the_answer.appendChild(answer)
      }
      if (userChoice==="rock" && compChoice ==="scissors"){ 
        answer.className = "green"
        answer.textContent = (userChoice +" beats "+compChoice +" you Win")
        the_answer.appendChild(answer)
      }
      if (userChoice==="paper" && compChoice==="rock"){ 
        answer.className = "green"
        answer.textContent = (userChoice +" beats "+compChoice +" you Win")
        the_answer.appendChild(answer)
      }
      if (userChoice==="scissors" && compChoice === "paper"){ 
        answer.className = "green"
        answer.textContent =(userChoice +" beats "+compChoice +" you Win")
        the_answer.appendChild(answer)
      }
      if (userChoice === compChoice){ 
        answer.className = "yellow"
        answer.textContent= "Draw"
        the_answer.appendChild(answer)
      }
    })}
  


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
