# A11y-cypress-axe


#### Install node and nvm
    https://nodejs.org/en/download/

#### Install Cypress and Cypress Axe
    npm init -y
    npm i -D cypress@4.8.0 cypress-axe@0.8.1

### Open Cypress
    npx cypress open

### Install Applitools
    npm i -D @applitools/eyes-cypress@3.13.4
    npx eyes-setup

### Export Applitools
    export APPLITOOLS_API_KEY=


# Acessibilidade - A11y

Easy Checks -> [Easy Checks – A First Review of Web Accessibility](https://www.w3.org/WAI/test-evaluate/preliminary/)

Checks that can be automated:
- Page title: serve para o usuário saber em qual página ele está
- Verificação de texto da imagem: serve para usuários entenderem as imagens que não conseguem ver
- Headings: verificar se a página tem ao menos um título e uma boa estrutura de texto. Também verificar se a página pode ser acessada usando apenas o teclado
- Colour contrast: verificar se o texto tem contraste suficiente
- HTML Structure: verificar se não há erros da estrutura HTML que podem quebrar a página
- ARIA Labels: é usado como um rótulo para elementos onde o rótulo não é visivel
Checks that you need to test:
- Page title
- Image text alternatives
- Headings
- Colour Contrast 
- HTML Structure
- ARIA Labels
- Verificar se as coisas realmente fazem sentido
Don’t forget:
- Feedback on form submissions
- Clarity of subtitles
- Can animations be turned off?
- If the content accessible with keyboard only?
- Are elements focusable?
- Does it have clear fonts?
- Can audio levels be modified?
- Is the layout responsive?
Tips on doing accessibility testing
- Decidir qual é o nivel de acessibilidade (WCAG 2.1 Level AA) - começar sempre no Level A
- Comecar em uma página básica
- Usar o teclado basicamente
- Usar leitores de tela
- Desativar os speakes e verificar se tem como assistir a vídeos com legenda
- Usar a lista de verificação de acessibilidade
- Usar testes exporatórios

## Atalhos importantes do teclado

- Ctrl (CMD) + L: coloca o “foco” na barra de pesquisa do navegador
- Tab: ir para elementos como links e botões
- Shift + Tab: inverte a ordem para clicar nos links (voltar)
- Setas: navegar no site
- Space: marcar e desmarcar caixas de seleção ou botões 
- Enter: clicar em botões ou links

Leitores de tela:
- VoiceOver
- Nvda
- Jaws
- Android Talkback
Extensões do Chrome:
- Axe
- Wave
- Google Lighthouse








