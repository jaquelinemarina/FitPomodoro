// parte da gamificação do pomodoro:
async function updateLevelProgress() {
  const usernameInput = document.getElementById('username'); // Obtém o elemento input do nome do usuário
  const username = usernameInput ? usernameInput.value : null; // Obtém o valor do input, se disponível
  const difficulty = localStorage.getItem('difficulty');
  let key = `previous${
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
  }Stretchings`;

  const previousStretchings = JSON.parse(localStorage.getItem(key) || '[]');
  const stretchings = await loadStretchings();

  const totalForDifficulty = stretchings.filter(
    (stretch) => stretch.difficulty === difficulty
  ).length;
  const remaining = totalForDifficulty - previousStretchings.length;
  // Exibe o modal de parabenização/gameficação se não restarem mais alongamentos no nível de dificuldade
  if (remaining <= 0) {
    showStretchingAllDoneModal();
  }
  document.getElementById('level').innerText = `${remaining}`;

  // Atualiza o atributo title do link
  const levelLink = document.getElementById('level');
  if (username) {
    levelLink.setAttribute(
      'title',
      `${username}, você ainda tem ${remaining} alongamentos para concluir este nível`
    );
  } else {
    levelLink.setAttribute(
      'title',
      `Você ainda tem ${remaining} alongamentos para concluir este nível`
    );
  }
}
// Exibe o modal de configuração do Pomodoro para escolher outro nível de dificuldade
document
  .getElementById('choose-difficulty')
  .addEventListener('click', function () {
    hideStretchingAllDoneModal();
    showModal();
  });
// Esvazia a lista de alongamentos completados para a dificuldade atual e atualiza a exibição de quantos alongamentos faltam
document.getElementById('restart-level').addEventListener('click', function () {
  hideStretchingAllDoneModal();
  const difficulty = localStorage.getItem('difficulty');
  let key = `previous${
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
  }Stretchings`;
  localStorage.setItem(key, '[]');
  updateLevelProgress();
});
