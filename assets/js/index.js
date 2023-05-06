const modalBtn = document.getElementById('p_modal_button3');
const questionsAnswers = document.getElementById('content1');

const publishBtn = document.getElementById('publish-btn');
const commentsInput = document.getElementById('comment-text');
const commentsFace = document.getElementsByClassName('comments_face');
console.log(commentsFace);


// Save user answers in LS; output the answers to the browser console by pressing OK btn; 

const LS_KEY = 'user_answers';
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
  localStorage.setItem(LS_KEY, '');
  console.log(userData);
};

questionsAnswers.addEventListener('click', handleAnswersColect);
modalBtn.addEventListener('click', handleOKClick);

// Add comment

const handleSetComment = () => {
    const commentEl = document.createElement('div');
    commentEl.classList.add('new-comment');

    const commentText = document.createTextNode(commentsInput.value);
    commentEl.appendChild(commentText);

    commentsFace.appendChild(commentEl);

    commentsInput.value = '';
}

publishBtn.addEventListener('click', handleSetComment)