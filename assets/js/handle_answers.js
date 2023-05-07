const answerButtons = document.querySelectorAll(".survey_button");
const modalButton = document.getElementById("p_modal_button3");

const LS_KEY = "answers";

answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.textContent.trim();
    const questionId = button.parentNode.getAttribute("id");
    const answers = JSON.parse(localStorage.getItem(LS_KEY)) || {};

    answers[questionId] = answer;
    localStorage.setItem(LS_KEY, JSON.stringify(answers));
  });
});

modalButton.addEventListener("click", (event) => {
  event.preventDefault();

  const userAnswers = JSON.parse(localStorage.getItem(LS_KEY));
  console.log(userAnswers);
  localStorage.removeItem(LS_KEY);
});
