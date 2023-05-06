const answerButtons = document.querySelectorAll('.survey_button');

answerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.textContent.trim();
    const questionId = button.parentNode.getAttribute('id');
    const answers = JSON.parse(localStorage.getItem('answers')) || {};

    answers[questionId] = answer;
    localStorage.setItem('answers', JSON.stringify(answers));
  });
});

const modalButton = document.getElementById('p_modal_button3');

modalButton.addEventListener('click', (event) => {
  event.preventDefault();

  const userAnswers = JSON.parse(localStorage.getItem('answers'));
  console.log(userAnswers);
  localStorage.removeItem('answers');
});
