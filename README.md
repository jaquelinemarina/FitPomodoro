# fitPomodoro

**fitPomodoro** é um timer Pomodoro desenvolvido como parte de um desafio de trabalho em squads para o curso **futuroDev** do **Floripa Mais Tech**, coordenado pelo **Lab365** em parceria com o **SESI** e **SENAC**.

Este projeto visa incentivar práticas de alongamento durante as pausas da técnica de Pomodoro, com pausas divididas em níveis de dificuldade: iniciante, intermediário e avançado. Ao concluir um nível de dificuldades, o usuário é parabenizado e convidado a refazer o mesmo nível ou trocar de nível de dificuldade.

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

Para usar o fitPomodoro, clone ou faça download do repositório:

```bash
git clone https://github.com/VanderleiaOliveira/Pomodoro-Fit.git
```

## Uso

O uso é intuitivo, não requerendo comandos específicos além da interação direta com o navegador.

## Uso da API-NINJAS

Para utilizar a API-NINJAS nesta branch, siga os passos abaixo:

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

- Cores: [ Coolors ](https://coolors.com/)
- Imagens: [ Pixabay ](https://github.com/matiassingers/awesome-readme)
- Sons: [ Pixabay ](https://pixabay.com/)
- Icones: [ Font Awesome ](https://fontawesome.com/)