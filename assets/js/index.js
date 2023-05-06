const modalBtn = document.getElementById("p_modal_button3");
const questionsAnswers = document.getElementById("content1");

const publishBtn = document.getElementById("publish-btn");
const commentsInput = document.getElementById("comment-text");
const commentsFace = document.querySelector(".comments_face");

// Save user answers in LS; output the answers to the browser console by pressing OK btn;

const LS_KEY = "user_answers";
const userAnswersArr = [];

const handleAnswersColect = (event) => {
  let selectedValue = event.target.textContent
    .replaceAll("\n", "")
    .replaceAll(" ", "");
  console.log(selectedValue);
  userAnswersArr.push(selectedValue);

  localStorage.setItem(LS_KEY, JSON.stringify(userAnswersArr));
  console.log(userAnswersArr);
};

const handleOKClick = () => {
  const userData = localStorage.getItem(LS_KEY);
  localStorage.setItem(LS_KEY, "");
  console.log(userData);
};

questionsAnswers.addEventListener("click", handleAnswersColect);
modalBtn.addEventListener("click", handleOKClick);

// Add comment

const handleSetComment = () => {
  // create div container for new comment
  const commentEl = document.createElement("div");
  commentEl.classList.add("comments");

  // create div el for user img
  const profileEl = document.createElement("div");
  profileEl.classList.add("profile");
  profileEl.style.cssText = "width:60px;height:45px;";

  // create user img el
  const profileImg = document.createElement("img");
  profileImg.src =
    "https://w7.pngwing.com/pngs/565/454/png-transparent-user-computer-icons-anonymity-head-miscellaneous-face-service.png";
  profileEl.appendChild(profileImg);
  commentEl.appendChild(profileEl);

  // create div for comment text output
  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");

  const newUserName = document.createElement("p");
  newUserName.classList.add("name");
  newUserName.textContent = "anonymous";

  const commentText = document.createElement("p");
  commentText.textContent = commentsInput.value;

  commentContent.appendChild(newUserName);
  commentContent.appendChild(commentText);

  //   commentEl.appendChild(commentContent);
  commentEl.appendChild(commentContent);

  // const commentText = document.createTextNode(commentsInput.value);

  commentsFace.appendChild(commentEl);

  commentsInput.value = "";
};

publishBtn.addEventListener("click", handleSetComment);
