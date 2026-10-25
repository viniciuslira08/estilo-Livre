# Progresso — Projeto Estilo Livre

Registro diário do desenvolvimento do site da barbearia Estilo Livre (Bootstrap).

Site publicado: https://viniciuslira08.github.io/estilo-Livre/

---

## Situação do projeto

### Concluído
- Estrutura HTML5 + Bootstrap via CDN
- Navbar responsiva
- Seção Home (banner + botão de agendamento)
- Seção Sobre Nós
- Seção Serviços (cards)
- Seção Depoimentos (carousel)
- Formulário de Contato com alerta de confirmação
- Ajustes de espaçamento e utilitários
- Sass (`scss/style.scss`) compilado para `css/style.css`
- JavaScript (`js/main.js`)
- Publicação no GitHub Pages

### Pendente
- Testes de responsividade no DevTools
- Correção das setas do carousel sobre o texto dos depoimentos
- Revisão do `README.md`
- Commit e push finais
- Capturas de tela para a entrega

---

## Registro diário

### 16/10/2026 (sexta-feira)
- Inicializei o repositório Git com `git init`
- Criei a estrutura de pastas (`css/`, `img/`)
- Montei a estrutura HTML5 básica com Bootstrap via CDN
- Adicionei o Bootstrap Icons
- Fiz o primeiro commit (`first commit`)
- Renomeei a branch para `main` (`git branch -M main`)

### 17/10/2026 (sábado)
- Configurei o remote `origin` apontando para `viniciuslira08/estilo-Livre`
- Fiz o push inicial (`git push -u origin main`)
- Confirmei o envio no GitHub: 2 arquivos, 339 inserções (`css/style.css` e `index.html`)
- Comecei o CSS de customização do Bootstrap

### 18/10/2026 (domingo)
- Finalizei o `css/style.css`:
  - Variável de destaque (`--cor-destaque: #f0a500`)
  - Fonte do `body` e `scroll-behavior: smooth`
  - Compensação da navbar fixa nas âncoras (`scroll-margin-top`)
  - Efeito de hover nos cards
  - Media query para telas pequenas
- Revisei as seções do `index.html` (Home, Sobre, Serviços, Depoimentos, Contato)

### 19/10/2026 (segunda-feira)
- Adicionei o `README.md` ao repositório
- Fiz o commit e o push das atualizações
- Criei este arquivo de progresso (`PROGRESSO.md`)
- Ajustes iniciais de responsividade

### 21/10/2026 (quarta-feira)
- Instalei a Dart Sass (1.105.2) e removi o Ruby Sass antigo do sistema
- Criei a pasta `scss` e copiei o `css/style.css` para `scss/style.scss`
- Compilei com `sass --no-source-map scss/style.scss css/style.css`
- Criei a pasta `js` e o arquivo `js/main.js`
- Implementei o destaque automático do item do menu conforme a rolagem (IntersectionObserver)
- Implementei o fechamento automático do menu hamburguer ao clicar em um item (mobile)
- Corrigi o posicionamento dos scripts no `index.html` (estavam fora do `<body>` e o Bootstrap carregava duas vezes)

### 23/10/2026 (sexta-feira)
- Geradas e salvas em `img/` as seis imagens pendentes, em PNG: `servico-corte.png`, `servico-barba.png`, `servico-combo.png`, `depoimento-1.png`, `depoimento-2.png` e `depoimento-3.png`
- Atualizei no `index.html` as referências dessas imagens de `.jpg` para `.png`
- Corrigi a imagem quebrada da seção Sobre Nós, criando `img/sobre-nos.png`
- Conferi no navegador que banner, serviços, depoimentos e Sobre Nós carregam
- Enviei ao GitHub os commits com as imagens (`52a64d3..d44b195` e `d44b195..6ea8bb3`)
- Decisão: manter as imagens em PNG, pois o enunciado não exige formato específico

### 24/10/2026 (sábado)
- Passo 1 (ajustes no código):
  - Títulos dos serviços trocados de `h5` para `h3 class="card-title h5"`, sem mudar o tamanho visual
  - Conferi a tesoura ao lado de "Estilo Livre" na navbar
  - Formulário com `id="formContato"` e `div#alertaContato`
  - `js/main.js` com `preventDefault`, alerta "Mensagem enviada!" e limpeza dos campos
  - Testado: campos vazios mostram o aviso do navegador; campos preenchidos mostram o alerta verde e limpam o formulário
- Passo 2 (varredura): busca por `.jpg` sem ocorrências no HTML e nos estilos; o banner é fundo da Home definido no CSS (`img/banner.png`)
- Enviei ao GitHub o commit com os ajustes (`84f9fc4..5351851`) e o `git status` ficou limpo
- Passo 3 (GitHub Pages): ativei em Settings → Pages, branch `main`, pasta root
- Deploy concluído com sucesso em 47s
- Conferi o site publicado em outro navegador: banner, imagens, CSS, carousel e rodapé carregam
- Testei o formulário no site publicado: o alerta verde aparece e os campos são limpos
- Observação para corrigir: no carousel, as setas ficam sobre o texto dos depoimentos

---

## Próximos passos

### Testes de responsividade (DevTools, F12)
Ativar o modo dispositivo, percorrer a página inteira em cada largura e anotar os problemas antes de corrigir.

#### 375px (celular)
- Menu hamburguer aparece, abre e fecha, e os links levam às seções
- Cards de serviços empilham em uma coluna
- Imagem do Sobre Nós não fica grande demais nem estoura a tela
- Texto legível, sem rolagem horizontal
- Carousel funciona, com setas visíveis e fotos sem deformar
- Formulário ocupa a largura certa e os campos são fáceis de tocar

#### 768px (tablet)
- Navbar com comportamento coerente (menu recolhido ou expandido)
- Cards de serviços organizados sem quebrar o layout
- Sobre Nós com imagem e texto bem distribuídos
- Carousel e formulário alinhados e centralizados

#### 1280px (desktop)
- Menu completo na navbar, com link ativo destacado ao rolar a página
- Três cards de serviços lado a lado e com a mesma altura
- Banner da Home com texto legível sobre a imagem
- Sobre Nós com imagem e texto lado a lado
- Carousel, formulário e rodapé alinhados

### Entrega
- Corrigir o que aparecer nos testes, incluindo as setas do carousel
- Revisar o `README.md` (nome, descrição, tecnologias, link do Pages e comando do Sass)
- Compilar o Sass: `sass --no-source-map scss/style.scss css/style.css`
- Fazer o commit e o push finais e conferir se o `git status` mostra "nothing to commit, working tree clean"
- Tirar até 10 capturas do site publicado: desktop, tablet, celular, menu aberto e formulário
- Enviar o link público do repositório e as capturas