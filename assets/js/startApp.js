document.addEventListener('DOMContentLoaded', function () {
  // Verifica se a chave 'pause' existe no localStorage e, se não, define como '0' para não reiciar ela toda vez que atualizar as configurações
  if (localStorage.getItem('pause') === null) {
    localStorage.setItem('pause', '0');
  }
  // a função abaixo garante que na inicialização do sistema o modal de alongamentos não seja exibido
  hideStretchingModal();

  const username = localStorage.getItem('username');
  const pomodoroDuration = localStorage.getItem('pomodoroDuration');
  const pomodoroPause = localStorage.getItem('pomodoroPause');
  const pomodoroLongPause = localStorage.getItem('pomodoroLongPause');
  const difficulty = localStorage.getItem('difficulty');

  // Se algum valor estiver ausente, exibe o modal
  if (!username || !pomodoroDuration || !difficulty) {
    showModal();
  } else {
    hideModal();
    // Se os valores estiverem presentes, preenche os campos
    document.getElementById('username').value = username;
    document.getElementById('pomodoroDuration').value = pomodoroDuration;
    document.getElementById('pomodoroPause').value = pomodoroPause;
    document.getElementById('pomodoroLongPause').value = pomodoroLongPause;
    document.getElementById('difficulty').value = difficulty;

    changeBackgroundByDifficulty();
    updateLevelProgress();
    const durationMinutes =
      parseInt(localStorage.getItem('pomodoroDuration')) || 25;
    timeLeftInSeconds = durationMinutes * 60;
    updateCountdownDisplay(); // Atualiza o display pela primeira vez
  }

  // area de salva na localStorage as configurações do pomodoro e o nome do usário
  const form = document.getElementById('configPomodoro');
  // Adiciona um ouvinte de evento para o envio do formulário
  form.addEventListener('submit', function (event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Obtém os valores dos inputs
    const username = document.getElementById('username').value;
    const pomodoroDuration = document.getElementById('pomodoroDuration').value;
    const pomodoroPause = document.getElementById('pomodoroPause').value;
    const pomodoroLongPause =
      document.getElementById('pomodoroLongPause').value;
    const difficulty = document.getElementById('difficulty').value;

    // Salva os valores no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('pomodoroDuration', pomodoroDuration);
    localStorage.setItem('pomodoroPause', pomodoroPause);
    localStorage.setItem('pomodoroLongPause', pomodoroLongPause);
    localStorage.setItem('difficulty', difficulty);

    // Chama a função para ocultar o modal de configurações do Pomodoro
    hideModal();
    changeBackgroundByDifficulty();
    changeTextColorByDifficultyInConfigButton();
    const durationMinutes =
      parseInt(localStorage.getItem('pomodoroDuration')) || 25;
    timeLeftInSeconds = durationMinutes * 60;
    updateCountdownDisplay();
    updateLevelProgress();
  });
});
