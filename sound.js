const doSound = new Audio("sounds/do.mp3");
const reSound = new Audio("sounds/re.mp3");
const miSound = new Audio("sounds/mi.mp3");
const faSound = new Audio("sounds/fa.mp3");

doSound.preload = "auto";
reSound.preload = "auto";
miSound.preload = "auto";
faSound.preload = "auto";

function playNoteSound(note) {
  if (note === "do") {
    doSound.currentTime = 0;
    doSound.play();
  }
  if (note === "re") {
    reSound.currentTime = 0;
    reSound.play();
  }

  if (note === "mi") {
    miSound.currentTime = 0;
    miSound.play();
  }

  if (note === "fa") {
    faSound.currentTime = 0;
    faSound.play();
  }
}
