var timeLeft = 30;
function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    console.log(timeLeft);
    var timer = document.querySelector("#timer-countdown");
    timer.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timeInterval);

      alert("Time's Up");
      var enterscore = prompt("Enter Your Initials");
      document.getElementById("user-name-1").textContent = enterscore;
    }
  }, 1000);
}
countdown();
var questionid = 1;
var previousquestionid=0
var buttonAnswer = document.querySelectorAll(".answer");
buttonAnswer.forEach((button) => {
  button.addEventListener("click", function (event) {
    var questioncontainer = document.querySelector(".q" + questionid);
    questioncontainer.classList.remove("hide");
    var previousquestioncontainer = document.querySelector(".q" +previousquestionid)
    previousquestioncontainer.classList.add("hide");

    console.log(questioncontainer);
    questionid++;
    previousquestionid++
    console.log(event.target.classlist);
    if (event.target.classList[1]) {
      event.target.classList.add("green");
      if (event.target.getAttribute("last-question")) {
        alert("Game Is Over");
        var enterscore = prompt("Enter Your Initials");
      }
    } else {
      if (event.target.getAttribute("last-question")) {
        alert("Game Is Over");
        var enterscore = prompt("Enter Your Initials");
      }
      event.target.classList.add("red");
      timeLeft -= 5;
    }
  });
});
