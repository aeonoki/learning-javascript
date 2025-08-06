function gaming() {
  const buttonElement = document.querySelector('.gaming-button');

  if (!buttonElement.classList.contains('off-button')) {
    buttonElement.classList.add('off-button');
  } else {
    buttonElement.classList.remove('off-button');
  }
}