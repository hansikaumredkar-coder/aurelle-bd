const surprises = {
  message: {
    title: "A little message 💌",
    text: "You are appreciated more than words can say. I hope today reminds you how special you are and how much happiness you bring to others."
  },
  memory: {
    title: "A sweet memory 🌷",
    text: "Some moments become special simply because you were part of them. Here's to keeping those lovely memories close and making many more."
  },
  wish: {
    title: "A birthday wish 🎂",
    text: "May your new year be filled with laughter, beautiful surprises, exciting adventures, and all the little things that make you happy. Happy Birthday! 💗"
  }
};

const choiceButtons = document.querySelectorAll(".choice");
const surpriseBox = document.getElementById("surpriseBox");
const surpriseTitle = document.getElementById("surpriseTitle");
const surpriseText = document.getElementById("surpriseText");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const surprise = surprises[button.dataset.surprise];

    if (!surprise) return;

    surpriseTitle.textContent = surprise.title;
    surpriseText.textContent = surprise.text;
    surpriseBox.classList.remove("hidden");
  });
});
