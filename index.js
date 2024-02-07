const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes não é um tipo de dado em JavaScript?",
      respostas: [
        "Number",
        "Boolean",
        "StringArray",
      ],
      correta: 2
    },
    {
      pergunta: "Como se chama o processo de combinar dois ou mais strings em JavaScript?",
      respostas: [
        "Concatenação",
        "Interpolação",
        "Concatenação condicional",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'indexOf()' em JavaScript?",
      respostas: [
        "Retornar o índice do primeiro elemento correspondente a um valor especificado",
        "Adicionar um novo elemento ao final de um array",
        "Remover um elemento de um array",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é executada após um certo número de milissegundos",
        "Uma função que é passada como argumento para outra função",
        "Uma função que é chamada automaticamente quando o programa é iniciado",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos são operadores de igualdade",
        "'===' compara o valor e o tipo, enquanto '==' compara apenas o valor",
        "'==' compara o valor e o tipo, enquanto '===' compara apenas o valor",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para iterar sobre os elementos de um objeto?",
      respostas: [
        "for...in",
        "forEach()",
        "map()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado que representa uma coleção de nós",
        "Uma biblioteca popular de JavaScript para manipulação de data e hora",
        "Uma interface que permite a manipulação de elementos HTML e XML",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Para alterar o estilo de um elemento HTML",
        "Para adicionar um evento a um elemento HTML",
        "Para remover um elemento HTML do DOM",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template');
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + 
      perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
     
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
     quizItem.querySelector('dl dt').remove() 
  
   
   //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }