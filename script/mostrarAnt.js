
function mostrarImagenAnterior() {
  const radioButtons = document.querySelectorAll('input[name="position"]');
  let currentIndex = -1;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      currentIndex = i;
      break;
    }
  }
  if (currentIndex >= 0) {
    radioButtons[currentIndex].checked = false;
    const prevIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
    radioButtons[prevIndex].checked = true;
  }
}