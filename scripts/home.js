function limparCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("quartos").value = "";
    document.getElementById("vagas").value = "";
    document.getElementById("areaDoTerreno").value = "";
    document.getElementById("areaConstruida").value = "";
    document.getElementById("localidade").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("imagem").value = "";
}

function salvarNoLocalStorage() {
    var titulo = document.getElementById("titulo").value;
    var descricao = document.getElementById("descricao").value;
    var quartos = document.getElementById("quartos").value;
    var vagas = document.getElementById("vagas").value;
    var areaDoTerreno = document.getElementById("areaDoTerreno").value;
    var areaConstruida = document.getElementById("areaConstruida").value;
    var localidade = document.getElementById("localidade").value;
    var preco = document.getElementById("preco").value;
    var imagem = document.getElementById("imagem").value;

    var obj = { titulo: titulo, descricao: descricao, quartos: quartos, vagas: vagas, areaDoTerreno: areaDoTerreno, areaConstruida: areaConstruida, localidade: localidade, preco: preco, imagem: imagem };

    var strObj = JSON.stringify(obj);
    localStorage.setItem(titulo, strObj);

}

function validaCampos() {
    var titulo = document.getElementById("titulo").value;
    var descricao = document.getElementById("descricao").value;
    var quartos = document.getElementById("quartos").value;
    var vagas = document.getElementById("vagas").value;
    var areaDoTerreno = document.getElementById("areaDoTerreno").value;
    var areaConstruida = document.getElementById("areaConstruida").value;
    var localidade = document.getElementById("localidade").value;
    var preco = document.getElementById("preco").value;
    var imagem = document.getElementById("imagem").value;

    if (titulo != "" && descricao != "" && quartos != "" && vagas != "" && areaDoTerreno != "" && areaConstruida != "" && localidade != "" && preco != "" && imagem != "") {
        if (quartos >= 0 && vagas >= 0 && areaDoTerreno >= 0 && areaConstruida >= 0 && preco >= 0) {
            return true;
        }
        else {
            alert("Não pode ter campos preenchidos com dados menores que zero!")
        }
    }

    else {
        return false;
    }

}