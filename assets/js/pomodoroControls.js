let countdownInterval;
let timeLeftInSeconds;
let isPomodoroRunning = false;
//  a função abaixo alterna o icone do botão de iniciar ou pausar o pomodoro
function updateCountdownDisplay() {
  const minutes = Math.floor(timeLeftInSeconds / 60);
  const seconds = timeLeftInSeconds % 60;
  document.getElementById('pomodoroCountdown').textContent = `${String(
    minutes
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
function togglePomodoro(event) {
  // console.log(isPomodoroRunning);
  event.preventDefault();
  const playPauseIcon = document.getElementById('playPauseIcon');

  if (!isPomodoroRunning) {
    startPomodoro();
    playPauseIcon.classList.replace('fa-play', 'fa-pause');
  } else {
    pausePomodoro();
    playPauseIcon.classList.replace('fa-pause', 'fa-play');
  }
}
// carrega o som de fim do pomodoro
const pomodoroEndSound = new Audio('/assets/sounds/pomodoro-end.mp3');
function startPomodoro() {
  const playPauseIcon = document.getElementById('playPauseIcon');
  if (!isPomodoroRunning) {
    // Se o Pomodoro não estiver rodando, prepare para iniciar ou continuar
    if (!countdownInterval) {
      // Define a duração apenas se o Pomodoro está começando do início
      if (timeLeftInSeconds <= 0) {
        const durationMinutes =
          parseInt(localStorage.getItem('pomodoroDuration')) || 25;
        timeLeftInSeconds = durationMinutes * 60;
      }

      updateCountdownDisplay(); // Atualiza o display inicialmente.

      countdownInterval = setInterval(() => {
        if (timeLeftInSeconds > 0) {
          timeLeftInSeconds--;
          updateCountdownDisplay();
        } else {
          clearInterval(countdownInterval);
          countdownInterval = null; // Limpa o intervalo de contagem regressiva
          isPomodoroRunning = false; // Atualiza o estado do Pomodoro
          pomodoroEndSound.play(); // Reproduz o som de fim de Pomodoro
          showStretchingModal(); // Exibe o modal de alongamento ao final do Pomodoro
          showStretching();
          playPauseIcon.classList.replace('fa-pause', 'fa-play');
        }
      }, 1000);
    }
    isPomodoroRunning = true; // Marca o Pomodoro como ativo
  }
}

function pausePomodoro() {
  if (isPomodoroRunning && countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
    isPomodoroRunning = false;
  }
}

function resetPomodoro() {
  // Limpa o intervalo de contagem regressiva existente, se houver
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  // Reseta o estado de execução do Pomodoro isso precisa lá para os botões de play/pause e o startPomodoro funcionar corretamente
  isPomodoroRunning = false;

  // Define `timeLeftInSeconds` para a duração padrão do Pomodoro ou uma customizada pelo usuário
  const durationMinutes =
    parseInt(localStorage.getItem('pomodoroDuration')) || 25;
  timeLeftInSeconds = durationMinutes * 60;

  // Atualiza o display do contador para refletir o tempo resetado
  updateCountdownDisplay();

  // Atualiza o ícone do botão play/pause para "play" pq provavelmente o botão vai estar exibindo pause
  const playPauseIcon = document.getElementById('playPauseIcon');
  if (playPauseIcon.classList.contains('fa-pause')) {
    playPauseIcon.classList.replace('fa-pause', 'fa-play');
  }
}
