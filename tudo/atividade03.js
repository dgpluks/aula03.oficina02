function lerEntrada(){
    document.getElementById("resp").innerHTML = ""
    var idade = document.getElementById("idade").value;
    if(idade !="" && idade != undefined ){
        document.getElementById("resp").innerHTML = `<div clas='title'>Idade informada: ${idade}</div>` ;
    votacao(idade);
}
    
}
function votacao(idade){
    if(idade<18){
        document.getElementById("resp").innerHTML += "<div clas='title'> A pessoa é menor de idade </div>"
        document.getElementById("resp").innerHTML += "<div clas='title'> A pessoa pode votar </div>"
    }else if (idade>=18){
        document.getElementById("resp").innerHTML += "<div clas='title'> A pessoa é maior de idade </div>"
        document.getElementById("resp").innerHTML += "<div clas='title'> A pessoa não pode votar </div>"
    }
        
}