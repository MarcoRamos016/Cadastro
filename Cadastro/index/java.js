document.addEventListener("DOMContentLoaded", function() {
    // capturar referencia do conteudo da tabela 
    var tableBody = document.querySelector("#dataTable tbody");

    //Limpar tabela
    tableBody.innerHTML = "";

    for (var i = 0; i < sessionStorage.length; i++) {
        
        if (sessionStorage.key(i) == "produtos"){

            var key = sessionStorage.key(i);
            var value = JSON.parse(sessionStorage.getItem(key));

            for(var j = 0; j <= value.length; j++){
                
                var objeto = value[j];

                console.log(objeto);

                 // Criar um linha
                 var newRow = document.createElement("tr");
                 // criar tres celulas
                 var idCell = document.createElement("td");
                 var nomeCell = document.createElement("td");
                 var telefoneCell = document.createElement("td");
                
                 idCell.textContent = objeto.id;
                 nomeCell.textContent = objeto.nome;
                 telefoneCell.textContent = objeto.telefone;
         
                 // Add dados na linha
                 newRow.appendChild(idCell);
                 newRow.appendChild(nomeCell);
                 newRow.appendChild(telefoneCell);
         
                 // ADD linha na tabela
                 tableBody.appendChild(newRow);

            } 
        }
    }
});
