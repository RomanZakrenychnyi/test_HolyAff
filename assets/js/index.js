const modalBtn = document.querySelector("#p_modal_button3");
const questionsAnswers = document.querySelector("#content1");

const LS_KEY = "user_answers";
const userAnswersArr = [];

const handleAnswersColect = (event) => {
  const selectedValue = event.target.textContent;
  //   selectedValue = userAnswersArr.replace(/(\r\n|\n|\r)/gm, '');
  userAnswersArr.push(selectedValue);
  JSON.stringify(localStorage.setItem(LS_KEY, userAnswersArr));
  console.log(userAnswersArr);
};

const handleOKClick = () => {
  const userData = localStorage.getItem(LS_KEY);
  localStorage.setItem(LS_KEY, "");
  console.log(userData);
};

questionsAnswers.addEventListener("click", handleAnswersColect);
modalBtn.addEventListener("click", handleOKClick);
