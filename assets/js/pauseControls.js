// pausas do pomodoro
let pauseCountDownInterval;
let pauseTimeLeftInSeconds;

function updatePauseCountDownDisplay() {
  const minutes = Math.floor(pauseTimeLeftInSeconds / 60);
  const seconds = pauseTimeLeftInSeconds % 60;
  document.getElementById('pauseCountDown').textContent = `${String(
    minutes
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// carrega o som de fim da pausa
const pomodoroEndPauseSoung = new Audio('/assets/sounds/pause-end.mp3');

function startStretchingPause() {
  const pauseCount = parseInt(localStorage.getItem('pause')) || 0;
  const isLongPause = pauseCount === 4;

  const pauseDuration = isLongPause
    ? parseInt(localStorage.getItem('pomodoroLongPause'))
    : parseInt(localStorage.getItem('pomodoroPause'));

  // console.log(
  //   `Iniciando ${
  //     isLongPause ? 'uma pausa longa' : 'uma pausa curta'
  //   } de ${pauseDuration} minutos.`
  // );

  pauseTimeLeftInSeconds = pauseDuration * 60;
  updatePauseCountDownDisplay();

  pauseCountDownInterval = setInterval(() => {
    if (pauseTimeLeftInSeconds > 0) {
      pauseTimeLeftInSeconds--;
      updatePauseCountDownDisplay();
    } else {
      clearInterval(pauseCountDownInterval);
      pauseCountDownInterval = null;
      pomodoroEndPauseSoung.play();
    }
  }, 1000);
}

function incrementPauseCount() {
  let pauseCount = parseInt(localStorage.getItem('pause')) || 0;

  // Incrementa o contador de pausas até 4, então reinicia para a próxima ser uma pausa longa
  if (pauseCount === 4) {
    console.log(`Pausa atual: ${pauseCount} - Próxima será uma pausa curta.`);
    localStorage.setItem('pause', '0'); // Reinicia o contador de pausas
  } else {
    pauseCount++;
    console.log(
      `Pausa atual: ${pauseCount} - ${
        pauseCount === 4
          ? 'Próxima será uma pausa longa'
          : 'Próxima será uma pausa curta'
      } de ${
        pauseCount === 4
          ? localStorage.getItem('pomodoroLongPause')
          : localStorage.getItem('pomodoroPause')
      } minutos.`
    );
    localStorage.setItem('pause', pauseCount.toString());
  }
}
