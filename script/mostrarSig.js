function mostrarImagenSiguiente() {
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
      const nextIndex = (currentIndex + 1) % radioButtons.length;
      radioButtons[nextIndex].checked = true;
    }
  }