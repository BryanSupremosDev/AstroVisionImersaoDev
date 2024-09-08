function pesquisar() {
   let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value
console.log(campoPesquisa);

if (campoPesquisa == "") {
   section.innerHTML = "<p>Digite antes de pesquisar</p>" 
   return 
}

campoPesquisa = campoPesquisa.toLowerCase();

let resultados = "";
let titulo = "";
let Descriçao = "";

for (let dado of dados) {
   
   titulo = dado.titulo.toLowerCase()
   Descriçao = dado.Descriçao.toLowerCase()

    if (titulo.includes(campoPesquisa) || Descriçao.includes(campoPesquisa)) {

      resultados += `    
       <div class="item-resultado">
         <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
         </h2>
         <p class="descricao-meta">${dado.Descriçao}</p>
            <a href=${dado.link}
            target="_blank">Mais Informaçoes</a>
       </div>
     `;
    }

}
if (!resultados) {
   resultados = "<p>Nada foi Encontrado</p>"
}

section.innerHTML = resultados;
}
