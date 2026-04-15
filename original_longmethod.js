let playerInitPosition = 4;
const doButton = document.querySelector("#do");
//querySelector pick 1 element! means inside the ID only got 1 element
const reButton = document.querySelector("#re");
const miButton = document.querySelector("#mi");
const faButton = document.querySelector("#fa");
const resetButton = document.querySelector("#reset");

function init() {
  const startCell = document.querySelector("#cell-" + playerInitPosition);
  startCell.textContent = "✈️";
  startCell.classList.add("current");
}
init();
// do button
doButton.addEventListener("click", function () {
  if (playerInitPosition % 3 == 2) {
    /*this is checking if it is reaching to the edge of the board*/
    return; /* the return here just mean exit the early) , exit the function early*/
  }
  let playerNewPosition = playerInitPosition + 1;
  /* - if condition not true, doesn't return, move into this line */
  console.log(playerInitPosition);
  let previousCell = document.querySelector("#cell-" + playerInitPosition);
  let currentCell = document.querySelector("#cell-" + playerNewPosition);
  previousCell.textContent = "";
  previousCell.classList.add("visited");
  previousCell.classList.remove("current");
  currentCell.classList.add("visited");
  currentCell.classList.add("current");
  currentCell.textContent = "✈️";
  playerInitPosition = playerNewPosition;
});

reButton.addEventListener("click", function () {
  if (
    playerInitPosition == 6 ||
    playerInitPosition == 7 ||
    playerInitPosition == 8
  ) {
    return;
  }
  let playerNewPosition = playerInitPosition + 3;
  console.log(playerInitPosition);
  let previousCell = document.querySelector("#cell-" + playerInitPosition);
  let currentCell = document.querySelector("#cell-" + playerNewPosition);
  previousCell.textContent = "";
  previousCell.classList.add("visited");
  previousCell.classList.remove("current");
  currentCell.classList.add("visited");
  currentCell.classList.add("current");
  currentCell.textContent = "✈️";
  playerInitPosition = playerNewPosition;
});

miButton.addEventListener("click", function () {
  if (
    playerInitPosition == 0 ||
    playerInitPosition == 3 ||
    playerInitPosition == 6
  ) {
    return;
  }
  let playerNewPosition = playerInitPosition - 1;
  console.log(playerInitPosition);
  let previousCell = document.querySelector("#cell-" + playerInitPosition);
  let currentCell = document.querySelector("#cell-" + playerNewPosition);
  previousCell.textContent = "";
  previousCell.classList.add("visited");
  previousCell.classList.remove("current");
  currentCell.classList.add("visited");
  currentCell.classList.add("current");
  currentCell.textContent = "✈️";
  playerInitPosition = playerNewPosition;
});

faButton.addEventListener("click", function () {
  if (
    playerInitPosition == 0 ||
    playerInitPosition == 1 ||
    playerInitPosition == 2
  ) {
    return;
  }
  let playerNewPosition = playerInitPosition - 3;
  console.log(playerInitPosition);
  let previousCell = document.querySelector("#cell-" + playerInitPosition);
  let currentCell = document.querySelector("#cell-" + playerNewPosition);
  previousCell.textContent = "";
  previousCell.classList.add("visited");
  previousCell.classList.remove("current");
  currentCell.classList.add("visited");
  currentCell.classList.add("current");
  currentCell.textContent = "✈️";
  playerInitPosition = playerNewPosition;
});

function resetGame() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(function (square) {
    square.classList.remove("current");
    square.classList.remove("visited");
    console.log(square.id, square.textContent);
    square.textContent = square.id.split("-")[1];
    console.log(square.id, square.textContent);
  });
  playerInitPosition = 4;
  console.log(playerInitPosition);
  init();
}
resetButton.addEventListener("click", function () {
  console.log("RESET GAME RAN");
  resetGame();
});
