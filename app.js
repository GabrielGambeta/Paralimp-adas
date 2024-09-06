function pesquisar() {
    // Esta função busca os dados da pesquisa e atualiza a seção de resultados na página.
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção de resultados
   
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    console.log(campoPesquisa);
   
    if (!campoPesquisa){
      
      section.innerHTML = "<p>Nada foi encontrado. Você não buscou por um tema valido</p>"
      return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
   // Inicia uma string vazia para armazzenar os resultados
    let resultados = "";
    let Titulo = "";
    let conteudo = "";
    let tags = "";
    // Itera sobre cada  dado da lista de dados 
    for (let dado of dados) {
        titulo = dado.Titulo.toLowerCase()
        conteudo = dado.conteudo.toLowerCase()
        tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
     if (Titulo.includes(campoPesquisa) || conteudo.includes(campoPesquisa)|| tags.includes(campoPesquisa) ) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.Titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.conteudo} </p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
         }
    
    }
  
    if (!resultados ){
         resultados = "<p>Nada foi encontrado</p>" 
    }   
 
 // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
 
}