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
## 23/10/2026

### O que foi feito hoje

- Geradas e salvas na pasta `img/` as seis imagens pendentes, em PNG: `servico-corte.png`, `servico-barba.png`, `servico-combo.png`, `depoimento-1.png`, `depoimento-2.png` e `depoimento-3.png`.
- Atualizadas no `index.html` as referências dessas imagens de `.jpg` para `.png`, o que fez as fotos aparecerem nos cards de serviços e no carousel de depoimentos.
- Identificada uma imagem quebrada na seção Sobre Nós (o `src` apontava para um arquivo inexistente). Criada uma foto própria, `img/sobre-nos.png`, e o `src` foi corrigido.
- Conferido no navegador (Ctrl+Shift+R) que banner, serviços, depoimentos e Sobre Nós carregam corretamente.
- Enviado ao GitHub o commit com as imagens de serviços e depoimentos (`52a64d3..d44b195`).
- Enviado ao GitHub o commit com a imagem da seção Sobre Nós (`d44b195..6ea8bb3`).
- Decisão registrada: manter as imagens em PNG. O enunciado do exercício não exige um formato específico e o site está funcionando bem. A conversão para JPG fica descartada.
- Decisão registrada: o Git será usado no final do processo, em um único commit, para não salvar a cada pequena alteração.

### Estado atual do projeto

- Estrutura em HTML5, Bootstrap via CDN, Sass (`scss/style.scss`), CSS compilado (`css/style.css`) e JavaScript (`js/main.js`).
- Seções: Home, Sobre Nós, Serviços, Depoimentos e Contato.
- Todas as imagens do projeto carregando.
- GitHub Pages ainda não ativado.
- Testes de responsividade ainda não realizados.

### Próximos passos

#### Passo 1: ajustes no código

- [ ] Trocar os títulos dos serviços de `h5` para `h3 class="card-title h5"` (corrige a hierarquia de títulos sem mudar o tamanho visual). Para conferir, buscar `</h5>` no `index.html`: sem resultados significa que a troca foi feita.
- [ ] Confirmar que o logo da navbar tem o ícone de tesoura ao lado do texto "Estilo Livre".
- [ ] Adicionar `id="formContato"` na tag `<form>` e uma `<div id="alertaContato" class="mt-3" role="status"></div>` logo após o `</form>`.
- [ ] Adicionar no final do `js/main.js` o código que usa `preventDefault`, mostra o alerta "Mensagem enviada!" e limpa os campos.
- [ ] Testar: formulário vazio mostra o aviso do navegador; formulário preenchido mostra o alerta verde e limpa os campos.

#### Passo 2: varredura de arquivos antigos

- [ ] Buscar `.jpg` no projeto inteiro (Ctrl+Shift+F) e corrigir qualquer referência a arquivo que não existe, principalmente `banner.jpg`.
- [ ] Conferir se não sobrou nenhum `<img>` solto apontando para o banner, que é fundo da seção Home pelo CSS.

#### Passo 3: GitHub Pages

- [ ] Ativar em Settings → Pages, com branch `main` e pasta root.
- [ ] Aguardar o deploy (alguns minutos).
- [ ] Abrir `https://viniciuslira08.github.io/estilo-Livre/` em aba anônima e conferir se banner, imagens e CSS carregam.

#### Passo 4: documentação

- [ ] Revisar o `PROGRESSO.md` (remover texto colado por engano, manter as entradas em ordem e registrar os dias de trabalho).
- [ ] Revisar o `README.md` com nome do projeto, descrição, tecnologias, link do GitHub Pages e comando para compilar o Sass.
- [ ] Compilar o Sass antes do commit: `sass --no-source-map scss/style.scss css/style.css`.
- [ ] Fazer o commit final e o push, e conferir se o `git status` mostra "nothing to commit, working tree clean".

### Testes da página (previstos para 24/10/2026)

Abrir o DevTools (F12), ativar o modo dispositivo e percorrer a página inteira em cada largura, anotando os problemas antes de corrigir.

#### 375px (celular)

- [ ] Menu hambúrguer aparece, abre e fecha, e os links levam às seções.
- [ ] Cards de serviços empilham em uma coluna.
- [ ] Imagem do Sobre Nós não fica grande demais nem estoura a tela.
- [ ] Texto legível, sem rolagem horizontal.
- [ ] Carousel funciona, com setas visíveis e fotos sem deformar.
- [ ] Formulário ocupa a largura certa e os campos são fáceis de tocar.

#### 768px (tablet)

- [ ] Navbar com comportamento coerente (menu recolhido ou expandido).
- [ ] Cards de serviços organizados sem quebrar o layout.
- [ ] Sobre Nós com imagem e texto bem distribuídos.
- [ ] Carousel e formulário alinhados e centralizados.

#### 1280px (desktop)

- [ ] Menu completo na navbar, com link ativo destacado ao rolar a página.
- [ ] Três cards de serviços lado a lado e com a mesma altura.
- [ ] Banner da Home com texto legível sobre a imagem.
- [ ] Sobre Nós com imagem e texto lado a lado.
- [ ] Carousel, formulário e rodapé alinhados.

### Entrega (24/10/2026)

- [ ] Corrigir o que aparecer nos testes.
- [ ] Commit e push finais.
- [ ] Tirar até 10 capturas do site publicado: desktop, tablet, celular, menu aberto e formulário.
- [ ] Enviar o link público do repositório e as capturas.