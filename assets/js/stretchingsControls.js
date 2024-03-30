// ALONGAMENTOS :
async function loadStretchings() {
  const response = await fetch('./assets/json/stretching.json');
  const stretchings = await response.json();
  return stretchings;
}

// exibir os alongamentos ao término do pomodoro
async function showStretching() {
  const difficulty = localStorage.getItem('difficulty');
  const stretchings = await loadStretchings();

  // Constrói a chave correta baseada na dificuldade
  let key = `previous${
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
  }Stretchings`;

  // Recupera os alongamentos concluídos para a dificuldade especificada
  const previousStretchingsForDifficulty = JSON.parse(
    localStorage.getItem(key) || '[]'
  );

  // Filtra os alongamentos pela dificuldade e que não foram mostrados recentemente
  const availableStretchings = stretchings.filter(
    (stretching) =>
      stretching.difficulty === difficulty &&
      !previousStretchingsForDifficulty.includes(stretching.id)
  );

  // Seleciona um alongamento aleatoriamente
  const stretchingToShow =
    availableStretchings[
      Math.floor(Math.random() * availableStretchings.length)
    ];

  if (stretchingToShow) {
    document.getElementById('stretchingName').textContent =
      stretchingToShow.name;
    document.getElementById('stretchingEquipment').textContent =
      stretchingToShow.equipment;
    document.getElementById('stretchingMuscle').textContent =
      stretchingToShow.muscle;
    document.getElementById('stretchingInstructions').textContent =
      stretchingToShow.instructions;

    // Determina a imagem com base na dificuldade
    let imageUrl;
    switch (difficulty) {
      case 'beginner':
        imageUrl = '/assets/img/alongamentos/iniciante.png';
        break;
      case 'intermediate':
        imageUrl = '/assets/img/alongamentos/intermediario.png';
        break;
      case 'expert':
        imageUrl = '/assets/img/alongamentos/avancado.png';
        break;
      default:
        imageUrl = '/assets/img/alongamentos/default.png'; // Imagem padrão caso necessário
    }

    // Atualiza o elemento de imagem com a URL correta
    const imageElement = document.getElementById('stretchingImage');
    imageElement.innerHTML = `<img src="${imageUrl}">`;

    // Aqui deve salvar o ID do alongamento mostrado para a lista correta baseada na dificuldade
    saveCompletedStretching(stretchingToShow.id, difficulty);
  }
}

function saveCompletedStretching(stretchingId, difficulty) {
  let key = `previous${
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
  }Stretchings`;
  let previousStretchings = JSON.parse(localStorage.getItem(key) || '[]');
  previousStretchings.push(stretchingId);
  localStorage.setItem(key, JSON.stringify(previousStretchings));
}

function stretchingDone() {
  // Encerra o contador de pausa
  if (pauseCountDownInterval) {
    clearInterval(pauseCountDownInterval);
    pauseCountDownInterval = null;
  }

  // Incrementa o contador de pausas e verifica se deve reiniciar para uma pausa longa
  incrementPauseCount();

  // Fecha o modal de alongamento
  hideStretchingModal();

  // Limpa o conteúdo do alongamento (se necessário)
  document.getElementById('stretchingName').textContent = '';
  document.getElementById('stretchingEquipment').textContent = '';
  document.getElementById('stretchingMuscle').textContent = '';
  document.getElementById('stretchingInstructions').textContent = '';

  // Incrementa o total de alongamentos feitos
  const totalStretchingDone =
    parseInt(localStorage.getItem('totalStretchingDone') || '0') + 1;
  localStorage.setItem('totalStretchingDone', totalStretchingDone.toString());

  // Atualiza o progresso no nível
  updateLevelProgress();
}
