const PROJECTS = [
  {
    id: 'carrinhoCompras',
    img:'/images/carrinho.png',
    pageLink: 'https://lucianolanes.github.io/carrinho-compras/',
    repoLink:'https://github.com/lucianolanes/carrinho-compras',
    title: 'Carrinho de Compras',
    text1: 'Projeto utilizando JavaScript, HTML, CSS e planejado inicialmente para a resolução 1366 x 768.',
    text2: 'Aplicação simulando uma página web de compras utilizando a API do Mercado Livre. Aqui é possível, além de realizar buscas de produtos consultando a API, adicionar e remover produtos do carrinho de compras.'
  },
  {
    id: 'toDoList',
    img:'/images/todo-list.png',
    pageLink: 'https://lucianolanes.github.io/todo-list',
    repoLink:'https://github.com/lucianolanes/todo-list',
    title: 'Lista de Tarefas',
    text1: 'Um dos primeiros projetos individuais que realizei logo que iniciei os estudos de programação, utilizando JavaScript, HTML e CSS e planejado inicialmente para a resolução 1366 x 768.',
    text2: 'A aplicação é uma lista de tarefas onde é possível adicionar novos dados, riscar tarefas já relizadas, deletar, ordenar e também salvá-las para que possam ser acessadas novamente após sair e retornar para a página.'
  },
  {
    id: 'mongoDB',
    img: '/images/mongoDB.png',
    repoLink:'https://github.com/lucianolanes/MongoDB-CRUD',
    title: 'MongoDB CRUD',
    text1: 'Projeto realizado para consolidar todos os conhecimentos adquiridos de MongoDB.',
    text2: 'A idéia é trabalhar com o banco de dados "commerce" que contém dados do cardápio do McDonalds, como: ingredientes, valores nutricionais e dados fictícios de vendas utilizando vários operadores para ler, criar, filtrar, atualizar e deletar dados.'
  },
  {
    id: 'mySQL',
    img: '/images/mysql.jpg',
    repoLink:'https://github.com/lucianolanes/MySQL-Database-One-for-All',
    title: 'MySQL Database',
    text1: 'Projeto realizado utilizando MySQL, aplicando as 1ª, 2ª e 3ª formas normais e identificando as entidades, atributos e relacionamentos.',
    text2: 'A proposta do projeto era consolidar todos os conhecimentos de SQL criando um banco de dados a partir de uma tabela despadronizada no Excel que simulava dados de um serviço de streaming de músicas. Também foram realizadas queries para consulta e a criação de VIEWS, TRIGGERS e UPDATES.'
  },
  {
    id: 'nodeAPI',
    img: '/images/node.jpg',
    repoLink:'https://github.com/lucianolanes/API-Digital-Republic-Challenge',
    title: 'Node.js API Bank',
    text1: 'API RESTful que simula o gerenciamento de contas bancárias, realizada para o Desafio de Back End proposto pela Digital Republic. A API possui sua organização bem definida com Models, Services, Controllers, Middlewares, tratamento de erros e exceções.',
    text2: 'Stack utilizada: Node.js, Express.js, MySQL, JTW, Mocha e Chai para os testes. Todas as instruções para executar e preparar o ambiente estão no ReadMe do repositório.'
  },
  {
    id: 'nodeAPIRESTful',
    img: '/images/node.jpg',
    repoLink:'https://github.com/lucianolanes/Nodejs-API-RESTful',
    title: 'Node.js API RESTful',
    text1: 'API que acessa um banco de dados NoSQL de usuários e receitas e que foi desenvolvida utilizando padrão REST e arquitetura MSC. Aqui é possível fazer o cadastro e login de pessoas usuárias e administratoras, bem como cadastro e requisição das receitas e suas imagens.',
    text2: 'Ferramentas utilizadas: JavaScript, Node.js, Express.js, MongoDB, JWT, Multer e para os testes Mocha e Sinon.',
  },
  {
    id: 'purpleRain',
    img:'images/purpleRainLogin.png',
    pageLink: 'https://lucianolanes.github.io/trivia-react-redux/',
    repoLink:'https://github.com/lucianolanes/trivia-react-redux',
    title: 'React Trivia',
    text1: 'Projeto realizado em equipe, utilizando JavaScript, CSS, React, Redux, API "Open Trivia DB" e planejado inicialmente para a resolução 1366 x 768.',
    text2: 'Neste jogo de trivia com a temática e identidade visual inspirados no videoclipe Purple Rain do cantor Prince, o principal objetivo foi testar os conhecimentos sobre React e Redux. Dica: se o nome do jogador for o nome completo do Prince, é ativado um Easter Egg :)'
  },
  {
    id: 'testesUnitarios',
    img:'images/jest.png',
    repoLink:'https://github.com/lucianolanes/Testes-Unitarios-Jest-RTL',
    title: 'Testes Unitários',
    text1: 'Neste projeto foram utilizadas as bibliotecas Jest e RTL (React Testing Library) para realizar os testes unitários dos componentes da aplicação React Pokédex.',
    text2: 'A cobertura de testes foi criada com intuito de utilizar as queries da RTL, simular eventos, testar o comportamento de inputs e componentes, criar mocks de API, testar fluxos lógicos assíncronos, entre outros.'
  }
];

export default PROJECTS;