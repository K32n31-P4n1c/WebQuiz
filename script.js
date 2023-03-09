const urlParams = new URLSearchParams(window.location.search);
const theme = urlParams.get("theme");

const themes = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "Madrid", "Berlin", "Rome", "London"],
  },
  {
    question: "What is the highest mountain in the world?",
    answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh", "Pablo Picasso"],
  },
  {
    question: "What is the largest country in the world by land area?",
    answers: ["Russia", "Canada", "China", "United States", "Brazil"],
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Yen", "Dollar", "Euro", "Pound", "Franc"],
  },
];

const themeObject = themes[theme - 1];
const questionElement = document.getElementById("question");
const answerElements = document.querySelectorAll("#answers button");
const scoreElement = document.getElementById("score");
let score = localStorage.getItem("score") || 0;

// Shuffle the answers array
themeObject.answers.sort(() => Math.random() - 0.5);

// Set the question and answer buttons text
questionElement.innerText  = themeObject.question;
answerElements.forEach((button, index) => {
  button.innerText  = themeObject.answers[index];
	
  // Add event listener to check if the answer is correct
  button.addEventListener("click", function() {
    if (button.innerText === themeObject.answers[0]) {
        alert("Correct!");
        score = parseInt(score) + 1;
        localStorage.setItem("score", score);
        scoreElement.innerText = `Score: ${score}`;
      } else {
        alert("Wrong answer. Please try again.");
        score = parseInt(score) - 1;
        localStorage.setItem("score", score);
        scoreElement.innerText = `Score: ${score}`;
      }
  });
});

scoreElement.innerText = `Score: ${score}`;

