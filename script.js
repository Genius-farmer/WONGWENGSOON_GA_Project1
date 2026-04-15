let playerInitPosition = 4;
let gameStarted = false;
const doButton = document.querySelector("#do");
//querySelector pick 1 element! means inside the ID only got 1 element
const maze = document.querySelector("#maze");
const controls = document.querySelector("#controls");
const message = document.querySelector("#message");
const reButton = document.querySelector("#re");
const miButton = document.querySelector("#mi");
const faButton = document.querySelector("#fa");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

startButton.addEventListener("click", function () {
  console.log("START CLICKED");
  resetGame(); // clean the board/data inside
  console.log("RESET CLICKED");
  maze.classList.remove("hidden");
  controls.classList.remove("hidden");

  message.textContent = "Ready ! ! ! ! ! ! ! ! ";

  setTimeout(function () {
    message.textContent = "";
  }, 1000);

  setTimeout(function () {
    message.textContent = "! ! ! ! ! WHYYY ! ! ! ! ! ! ! !";
  }, 1000);

  setTimeout(function () {
    message.textContent = "";
  }, 1000);

  setTimeout(function () {
    message.textContent = "GOOOOOOOOOOOO!!";
  }, 3000);

  setTimeout(function () {
    message.textContent = "";
    init();
    gameStarted = true;
  }, 2000);
});

function init() {
  const startCell = document.querySelector("#cell-" + playerInitPosition);
  startCell.textContent = "✈️";
  startCell.classList.add("current");
}
// do button
doButton.addEventListener("click", function () {
  if (!gameStarted) {
    return;
  }
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
  if (!gameStarted) {
    return;
  }
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
  if (!gameStarted) {
    return;
  }
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
  if (!gameStarted) {
    return;
  }
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
  maze.classList.add("hidden");
  controls.classList.add("hidden");
  gameStarted = false;
}
resetButton.addEventListener("click", function () {
  console.log("RESET GAME RAN");
  resetGame();
});
