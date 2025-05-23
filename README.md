# Projeto Gaia

![Logo Gaia](https://github.com/catarinaSayuri/ProjetoGaia/blob/main/gaia/public/assets/logoGaia.png?raw=true) <!-- Ajuste o caminho se necessário -->

## Sobre o Projeto

O Projeto Gaia é uma aplicação web interativa e educativa focada na conscientização sobre o descarte correto de resíduos sólidos e na promoção da sustentabilidade, especialmente no ambiente escolar. Foi desenvolvido por estudantes do Colégio Estadual de Tempo Integral Professora Odontina Laranjeira de Souza (CETIPOLS) em Ibotirama, Bahia, como uma solução tecnológica para engajar a comunidade escolar em práticas mais sustentáveis.

*Objetivos:*

*   Educar sobre a importância da coleta seletiva e do descarte adequado.
*   Incentivar mudanças de comportamento em relação aos resíduos.
*   Promover a sustentabilidade e a economia circular na escola.
*   Oferecer uma ferramenta interativa e lúdica para aprendizado.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

*   *React:* Biblioteca JavaScript para construção de interfaces de usuário.
*   *Create React App:* Ferramenta para iniciar rapidamente projetos React com uma configuração padrão.
*   *JavaScript:* Linguagem de programação principal.
*   *HTML:* Linguagem de marcação para estruturar o conteúdo web.
*   *CSS:* Linguagem para estilização da aparência das páginas.


## Instalação e Execução

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

*   *Node.js:* (Versão LTS recomendada) - Inclui o npm. [Download Node.js](https://nodejs.org/)
*   *Git:* Sistema de controle de versão. [Download Git](https://git-scm.com/downloads)

Você pode verificar se já os possui abrindo seu terminal (Prompt de Comando, PowerShell, Terminal) e digitando:
bash
node -v
npm -v
git --version


### Passos para Instalação

1.  *Clone o repositório:*
    bash
    git clone https://github.com/catarinaSayuri/ProjetoGaia.git
    

2.  *Navegue até a pasta do projeto principal:*
    *   O código da aplicação React está dentro da subpasta gaia.
    bash
    cd ProjetoGaia/gaia
    

3.  *Instale as dependências:*
    *   Este comando baixará todas as bibliotecas necessárias listadas no package.json.
    bash
    npm install
    
    (Observação: Podem aparecer avisos sobre pacotes desatualizados ou vulnerabilidades, o que é comum. Para fins de execução local, geralmente não impedem o funcionamento.)

### Executando o Projeto

1.  *Inicie o servidor de desenvolvimento:*
    *   Certifique-se de estar na pasta ProjetoGaia/gaia no seu terminal.
    bash
    npm start
    

2.  *Acesse no navegador:*
    *   O comando acima geralmente abrirá automaticamente seu navegador padrão na página http://localhost:3000.
    *   Se não abrir, copie e cole http://localhost:3000 na barra de endereços do seu navegador.

3.  *Explore!* A aplicação estará rodando localmente para você interagir.

4.  *Para parar a execução:* Volte ao terminal onde o npm start está rodando e pressione Ctrl + C.

## Estrutura do Projeto (Simplificada)

*   /gaia: Contém todo o código da aplicação React.
    *   /public: Arquivos estáticos, como o index.html base e algumas imagens.
    *   /src: O coração do projeto, onde fica a maior parte do código JavaScript/React.
        *   /components: Blocos reutilizáveis da interface (botões, seções, etc.).
        *   /assets: Imagens, fontes e outros recursos usados pelos componentes.
        *   App.js: Componente principal que organiza a aplicação.
        *   index.js: Ponto de entrada que renderiza o App no HTML.
    *   package.json: Lista as dependências do projeto e os scripts (como start, build).

## Autores

*   Estudantes do Colégio Estadual de Tempo Integral Professora Odontina Laranjeira de Souza (CETIPOLS) - Ibotirama/BA.
*   Repositório original: [catarinaSayuri/ProjetoGaia](https://github.com/catarinaSayuri/ProjetoGaia)
* * Desenvolvedoras:
  - [Catarina Sayuri](https://www.linkedin.com/in/catarina-sayuri/)
  - [Iasmim Jesus](https://www.linkedin.com/in/iasmim-/)
  - [Isabelly Maia](https://www.linkedin.com/in/isabellymaia/)
  - [Yasmin Minário](https://www.linkedin.com/in/yasmin-minario/)
