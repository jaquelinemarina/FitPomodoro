function showModal() {
  const modalBg = document.getElementById('modal');
  modalBg.classList.add('showModal');
}

function hideModal() {
  const modalBg = document.getElementById('modal');
  modalBg.classList.remove('showModal');
}

function showStretchingModal() {
  const modalStretchingBg = document.getElementById('modal-stretching');
  modalStretchingBg.classList.add('showModal');
  changeTextColorByDifficultyInConfigButton();
  startStretchingPause();
}

function hideStretchingModal() {
  const durationMinutes =
    parseInt(localStorage.getItem('pomodoroDuration')) || 25;
  timeLeftInSeconds = durationMinutes * 60;
  updateCountdownDisplay();
  const modalStretchingBg = document.getElementById('modal-stretching');
  modalStretchingBg.classList.remove('showModal');
}

function showStretchingAllDoneModal() {
  const modalStretchingAllDoneBg = document.getElementById(
    'modal-stretching-all-done'
  );
  modalStretchingAllDoneBg.classList.add('showModal');
}

function hideStretchingAllDoneModal() {
  const modalStretchingAllDoneBg = document.getElementById(
    'modal-stretching-all-done'
  );
  modalStretchingAllDoneBg.classList.remove('showModal');
}

function showDescriptionModal() {
  const modalDescription = document.getElementById('modal-description');
  modalDescription.classList.add('showModal');
}

function hideDescriptionModal() {
  const modalDescription = document.getElementById('modal-description');
  modalDescription.classList.remove('showModal');
}
