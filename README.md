<p align="center">
  <img src="https://github.com/VanderleiaOliveira/Pomodoro-Fit/blob/main/assets/img/logo2.png?raw=true" alt="Logo FitPomodoro">
</p>

# FitPomodoro

**FitPomodoro** é um timer Pomodoro desenvolvido como parte de um desafio de trabalho em squads para a formação **FuturoDev** do **Floripa Mais Tec**, coordenado pelo **Lab365** em parceria com o **SESI** e **SENAC**.

Este projeto visa incentivar a prática de exercícios de alongamento durante as pausas do Pomodoro.

As pausas estão divididas em níveis de dificuldade:

- Iniciante
- Intermediário
- Avançado

Ao concluir um nível de dificuldades, o usuário é parabenizado e convidado a refazer ou trocar o nível de dificuldade.

[FitPomodoro.webm](https://github.com/VanderleiaOliveira/Pomodoro-Fit/assets/153782247/700b8974-607f-40f1-ab3d-faeb304a309c)


## Tecnologias Utilizadas

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Autores

- Charles Biveu Doehl: [GitHub](https://github.com/charlesbiveu)
- Jaqueline Marina: [GitHub](https://github.com/jaquelinemarina)
- Vanderleia Oliveira: [GitHub](https://github.com/VanderleiaOliveira)
- Vanderley Rais: [GitHub](https://github.com/vanderleyrais)

## Instalação

Para usar o FitPomodoro, clone ou faça download do repositório:

```bash
git clone https://github.com/VanderleiaOliveira/Pomodoro-Fit.git
```

## Uso

O uso é intuitivo com interação direta com o navegador.

## Documentação

A documentação encontra-se no diretório **docs**.

## Utilizando a api do API-NINJAS

Para utilizar a API-NINJAS, siga os passos abaixo e acesso o arquivo api.html no diretório principal:

### Obter a API Key da API-NINJAS

1. **Acessar o site API-NINJAS**: Visite [API-NINJAS](https://api-ninjas.com/) para acessar a plataforma.
2. **Cadastro**: Se ainda não possui uma conta, realize o cadastro clicando em "Sign Up" ou [clique aqui](https://api-ninjas.com/register/) para se registrar.
3. **Login e obtenção da API Key**:
   - Após o cadastro e login, navegue até "My Account" ou [clique aqui](https://api-ninjas.com/profile).
   - Localize a seção "API Key" e clique no botão "Show API KEY" para exibir sua chave.
   - Copie a chave API fornecida. Ela terá um formato semelhante a: `E04PvGN89wI1PdcdZNjZu/Qw==gBNl5v5l8vs0w2E04PvGN89w`.

### Configurando a Chave API no Projeto

1. **Arquivo de Configuração**: Abra o arquivo `config.json` no diretório do projeto.
2. **Inserir a Chave API**: Cole sua chave API no local indicado, substituindo `SUA_API_KEY_COPIADA_COLE_AQUI` pela chave que você copiou. Por exemplo:
   ```json
   "API_KEY": "E04PvGN89wI1PdcdZNjZu/Qw==gBNl5v5l8vs0w2E04PvGN89w"
   ```

### Criando o arquivo `.gitignore`

Para evitar que sua chave API seja enviada para o repositório remoto:

1. **Crie um arquivo `.gitignore`** no diretório raiz do projeto, caso ainda não exista.
2. **Adicione `config.json` ao `.gitignore`**: Simplesmente escreva `config.json` dentro do arquivo `.gitignore`.
3. **Salve o arquivo `.gitignore`**: Com essa alteração, o arquivo `config.json` será ignorado pelo Git, protegendo sua chave API de ser publicada inadvertidamente.

Após esses passos, seu projeto estará configurado para usar a API-NINJAS de maneira segura e eficiente.

## Referência

- Api: [ API Ninjas ](https://api-ninjas.com/)
- Tradução do retorno da api: [ chatGPT ](https://chat.openai.com/)
- Cores: [ Coolors ](https://coolors.com/)
- Imagens: [ Pixabay ](https://github.com/matiassingers/awesome-readme)
- Sons: [ Pixabay ](https://pixabay.com/)
- Icones: [ Font Awesome ](https://fontawesome.com/)
- Fontes: [ Google Fonts](https://fonts.google.com/)
