const modalBtn = document.querySelector("#p_modal_button3");
const questionsAnswers = document.querySelector("#content1");
const LS_KEY = "user_answers";

const handleAnswersColect = (event) => {
  event.preventDefault();
    const selectedValue = event.target.textContent;


  JSON.stringify(localStorage.setItem(LS_KEY, selectedValue));
  console.log(selectedValue);
};

questionsAnswers.addEventListener("click", handleAnswersColect);
