function calcularMediaAtletas(atletas) {
    // Loop para percorrer todos os atletas
    atletas.forEach(atleta => {
      let nome = atleta.nome;
      let notas = atleta.notas;
  
      // Ordena as notas em ordem crescente
      notas.sort((a, b) => a - b);
  
      // Elimina a maior e a menor nota
      let notasComputadas = notas.slice(1, 4); // Mantém as 3 notas do meio
  
      // Calcula a média
      let soma = 0;
      notasComputadas.forEach(nota => {
        soma += nota;
      });
      let media = soma / notasComputadas.length;
  
      // Exibe os resultados
      console.log(`Atleta: ${nome}`);
      console.log(`Notas Obtidas: ${notas.join(", ")}`);
      console.log(`Média Válida: ${media.toFixed(9)}`); // Exibe a média com 9 casas decimais
      console.log(""); // Linha em branco para separar os resultados
    });
  }
  
  // Exemplo de entrada
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Chama a função com a entrada dos atletas
  calcularMediaAtletas(atletas);
  