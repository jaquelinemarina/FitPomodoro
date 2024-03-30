// muda a cor do fundo e dos botões conforme a dificuldade escolhida pelo usuário
function changeBackgroundByDifficulty() {
  let difficulty = localStorage.getItem('difficulty');
  // console.log(difficulty);
  // a classe change-background deve ser colocada em todos elementos que precisam ter seus fundos alterados
  //abaixo estes elementos são selecionados
  let elementsToChange = document.querySelectorAll('.change-background');
  let backgroundClass = '';

  switch (difficulty) {
    case 'beginner':
      backgroundClass = 'fundoVerde';
      break;
    case 'intermediate':
      backgroundClass = 'fundoAzul';
      break;
    case 'expert':
      backgroundClass = 'fundoVermelho';
      break;
  }
  // no case  pela dificuldade define a cor do fundo dos elementos
  // já abaixo, ele primeiro remove a classe pradrão dos elementos e coloca a classe de cor conforme a dificuldade
  elementsToChange.forEach((element) => {
    element.classList.remove('fundoVerde', 'fundoAzul', 'fundoVermelho');
    element.classList.add(backgroundClass);
  });
}

function changeTextColorByDifficultyInConfigButton() {
  let difficulty = localStorage.getItem('difficulty');
  // console.log(difficulty);
  // Seleciona os elementos que terão a cor do texto alterada
  let elementsToChangeTextColor =
    document.querySelectorAll('.change-text-color');
  let textColorClass = '';

  switch (difficulty) {
    case 'beginner':
      textColorClass = 'textoVerde';
      break;
    case 'intermediate':
      textColorClass = 'textoAzul';
      break;
    case 'expert':
      textColorClass = 'textoVermelho';
      break;
  }

  // Itera sobre os elementos selecionados e atualiza a classe de cor do texto
  elementsToChangeTextColor.forEach((element) => {
    element.classList.remove('textoVerde', 'textoAzul', 'textoVermelho');
    element.classList.add(textColorClass);
  });
}
