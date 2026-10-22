# Progresso — Projeto Estilo Livre

Registro diário do desenvolvimento do site da barbearia Estilo Livre (Bootstrap).

---

## Legenda
- [x] Concluído
- [ ] Em andamento
- [ ] Pendente

---

## Checklist geral do projeto

- [x] Estrutura HTML5 + Bootstrap via CDN
- [x] Navbar responsiva
- [x] Seção Home (banner + CTA)
- [x] Seção Sobre Nós
- [x] Seção Serviços (cards)
- [x] Seção Depoimentos (carousel)
- [x] Formulário de Contato
- [x] Ajustes de espaçamento e utilitários
- [ ] Testes de responsividade no DevTools
- [ ] Publicar no GitHub Pages
- [ ] Capturas de tela para a entrega

---

## Registro diário

### 16/10/2026 (sexta-feira)
- Inicializei o repositório Git com `git init`
- Criei a estrutura de pastas (`css/`, `img/`)
- Montei a estrutura HTML5 básica com Bootstrap via CDN
- Adicionei o Bootstrap Icons
- Fiz o primeiro commit (`first commit`)
- Renomeei a branch para `main` (`git branch -M main`)
- Configurando o remote `origin` no GitHub

### 17/10/2026 (sábado)
- Configurei o remote `origin` apontando para `viniciuslira08/estilo-Livre`
- Fiz o push inicial (`git push -u origin main`)
- Confirmei o envio: 2 arquivos, 339 inserções (`css/style.css` e `index.html`)
- Verifiquei o repositório no GitHub
- Comecei o CSS de customização do Bootstrap

### 18/10/2026 (domingo)
- Finalizei o `css/style.css`:
  - Variável de destaque (`--cor-destaque: #f0a500`)
  - Fonte do `body` e `scroll-behavior: smooth`
  - Compensação da navbar fixa nas âncoras (`scroll-margin-top`)
  - Efeito de hover nos cards
  - Media query para telas pequenas
- Revisei as seções do `index.html` (Home, Sobre, Serviços, Depoimentos, Contato)
- Ajustando detalhes de espaçamento e alinhamento

### 19/10/2026 (segunda-feira)
- Adicionei o `README.md` ao repositório
- Fiz o commit e o push das atualizações
- Confirmei no GitHub os commits de CSS, README.md e index.html
- Criei este arquivo de progresso (`PROGRESSO.md`)
- Ajustes finais de responsividade
- Falta testar em 375px, 768px e 1280px no DevTools
- Falta ativar o GitHub Pages
- Falta tirar as capturas de tela para a entrega

---

## Próximos passos
1. Testar o site em 375px, 768px e 1280px no DevTools
2. Ativar o GitHub Pages (Settings → Pages → branch `main` / root)
3. Tirar as capturas de tela
4. Enviar o link do repositório público

---

### 21/10/2026 (quarta-feira)
- Instalei a Dart Sass (1.105.2) e removi o Ruby Sass antigo do sistema
- Criei a pasta `scss` e copiei o `css/style.css` para `scss/style.scss`
- Compilei com `sass --no-source-map scss/style.scss css/style.css`
- Criei a pasta `js` e o arquivo `js/main.js`
- Implementei o destaque automático do item do menu conforme a rolagem (IntersectionObserver)
- Implementei o fechamento automático do menu hamburguer ao clicar em um item (mobile)
- Corrigi o posicionamento dos scripts no `index.html` (estavam fora do `<body>` e o Bootstrap carregava duas vezes)

---
https://app.innerai.com/?sharedSessionId=9206c273-dcf6-48d3-87e9-eac9dd6b2545