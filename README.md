# Estilo Livre

Site de uma barbearia fictícia, criado como exercício de Bootstrap. A página é de rolagem única, com navbar fixa, banner, seções de apresentação, serviços, depoimentos e um formulário de contato.

Site publicado: https://viniciuslira08.github.io/estilo-Livre/

## Seções

- Home, com banner e botão de agendamento
- Sobre Nós
- Serviços, com três cards (corte, barba e combo)
- Depoimentos, em carousel
- Contato, com formulário e mensagem de confirmação

## Tecnologias

- HTML5
- Bootstrap, carregado via CDN
- Bootstrap Icons
- Sass (Dart Sass)
- JavaScript

## Funcionalidades em JavaScript

- Destaque automático do item do menu conforme a seção visível na rolagem
- Fechamento do menu hamburguer ao clicar em um item, no celular
- Formulário de contato que exibe o alerta "Mensagem enviada!" e limpa os campos

## Estrutura do projeto

    estilo-Livre/
    ├── css/
    │   └── style.css
    ├── img/
    ├── js/
    │   └── main.js
    ├── scss/
    │   └── style.scss
    ├── index.html
    ├── PROGRESSO.md
    └── README.md

## Como compilar o Sass

O estilo é escrito em `scss/style.scss` e compilado para `css/style.css`. Depois de qualquer alteração no SCSS, rode na pasta do projeto:

    sass --no-source-map scss/style.scss css/style.css

## Como executar localmente

Para baixar o projeto em outro computador, clone o repositório:

    git clone https://github.com/viniciuslira08/estilo-Livre.git

Depois, abra a pasta no VS Code e inicie o Live Server em `index.html`, ou abra o `index.html` direto no navegador.

## Acompanhamento

O registro diário do desenvolvimento está no arquivo [PROGRESSO.md](PROGRESSO.md).