let playerInitPosition = 4;
let gameStarted = false;
let timers = [];
let validMoves = [];
let playerInput = [];
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

  message.textContent = "Ready ! ! ! ! ! ! ! !";

  playerInput.push("do");
  console.log(playerInput);

  let currentGamePosition = 4;
  let visitedGamePosition = [4];
  let gameGenNotes = [];

  for (let i = 0; i < 3; i++) {
    let validMoves = [];
    if (
      currentGamePosition % 3 !== 2 &&
      !visitedGamePosition.includes(currentGamePosition + 1)
    ) {
      validMoves.push("do");
    }
    if (
      currentGamePosition % 3 !== 0 &&
      !visitedGamePosition.includes(currentGamePosition - 1)
    ) {
      validMoves.push("mi");
    }
    if (
      currentGamePosition < 6 &&
      !visitedGamePosition.includes(currentGamePosition + 3)
    ) {
      validMoves.push("re");
    }
    if (
      currentGamePosition > 2 &&
      !visitedGamePosition.includes(currentGamePosition - 3)
    ) {
      validMoves.push("fa");
    }

    let randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];

    let newPosition;

    if (randomMove === "do") newPosition = currentGamePosition + 1;
    if (randomMove === "mi") newPosition = currentGamePosition - 1;
    if (randomMove === "re") newPosition = currentGamePosition + 3;
    if (randomMove === "fa") newPosition = currentGamePosition - 3;

    currentGamePosition = newPosition;
    visitedGamePosition.push(newPosition);
    gameGenNotes.push(randomMove);
  }
  console.log(gameGenNotes);

  timers.push(
    setTimeout(function () {
      message.textContent = "";
    }, 1000),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "Do";
    }, 1500),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "Do it";
    }, 2000),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "Do it with";
    }, 2500),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "Do it with me";
    }, 3000),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "Do it with me! ";
    }, 3100),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "Do it with me! !";
    }, 3200),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "Do it with me! ! !";
    }, 3300),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "Do it with me! ! ! !";
    }, 3400),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "ONE";
    }, 3800),
  );
  timers.push(
    setTimeout(function () {
      message.textContent = "TWO";
    }, 4200),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "THREE";
    }, 4600),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "GO";
    }, 5000),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = gameGenNotes[0];
    }, 5500),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = gameGenNotes[1];
    }, 6000),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = gameGenNotes[2];
    }, 6500),
  );

  timers.push(
    setTimeout(function () {
      message.textContent = "";
      maze.classList.remove("hidden");
      controls.classList.remove("hidden");
      init();
      gameStarted = true;
    }, 7000),
  );
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

// mi button!!!!
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

  message.textContent = ""; //removes GOOOOO that appears when i press reset

  timers.forEach(function (timer) {
    clearTimeout(timer);
  });
  timers = [];
}
resetButton.addEventListener("click", function () {
  console.log("RESET GAME RAN");
  resetGame();
});

// check do, re, mi, fa → push valid ones

// pick randomMove

// update position, visited, notes
