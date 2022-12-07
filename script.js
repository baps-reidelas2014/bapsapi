function cataCEP(){
    var cep = document.getElementById("cep").value;
    var url = `https://viacep.com.br/ws/${cep}/json`;
    var req = new XMLHttpRequest();
    req.open("GET",url);
    req.onerror = function(e){
        document.getElementById("textoApareceAqui").innerHTML= 'CEP INVALIDO!!!'
    }
    req.onload = () =>{         
        var resposta = JSON.parse(req.responseText);
        if(resposta.erro===true){
            document.getElementById("textoApareceAqui").innerHTML= 'CEP NÃO EXISTE!!!'
        }
        else{
            document.getElementById("textoApareceAqui").innerHTML= 'CEP informado: ' + resposta.cep + '<br>'+
            'Cidade: '+ resposta.localidade +', '+resposta.uf + '<br>' + 'DDD: '+ resposta.ddd;
        }
    }
    req.send();
}