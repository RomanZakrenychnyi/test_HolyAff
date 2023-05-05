const modalBtn = document.querySelector('#p_modal3');

console.log(modalBtn);

const handleBtnClick = (e) => {
    e.preventDefault();
    console.log(e.target);
} 

modalBtn.addEventListener('click', handleBtnClick);