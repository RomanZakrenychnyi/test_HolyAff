const publishBtn = document.getElementById('publish-btn');
const commentsInput = document.getElementById('comment-text');
const commentsFace = document.querySelector('.comments_face');

const handleSetComment = () => {
  // create div container for new comment
  const commentEl = document.createElement('div');
  commentEl.classList.add('comments');

  // create div el for user img
  const profileEl = document.createElement('div');
  profileEl.classList.add('profile');
  profileEl.style.cssText = 'width:60px;height:45px;';

  // create user img el
  const profileImg = document.createElement('img');
  profileImg.src =
    'https://w7.pngwing.com/pngs/565/454/png-transparent-user-computer-icons-anonymity-head-miscellaneous-face-service.png';
  profileEl.appendChild(profileImg);
  commentEl.appendChild(profileEl);

  // create div for comment text output
  const commentContent = document.createElement('div');
  commentContent.classList.add('comment-content');

  const newUserName = document.createElement('p');
  newUserName.classList.add('name');
  newUserName.textContent = 'anonymous';

  const commentText = document.createElement('p');
  commentText.textContent = commentsInput.value;

  commentContent.appendChild(newUserName);
  commentContent.appendChild(commentText);

  //   commentEl.appendChild(commentContent);
  commentEl.appendChild(commentContent);

  // const commentText = document.createTextNode(commentsInput.value);

  commentsFace.appendChild(commentEl);

  commentsInput.value = '';
};

publishBtn.addEventListener('click', handleSetComment);
