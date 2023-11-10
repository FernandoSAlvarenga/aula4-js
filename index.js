function carro(marca, modelo, peso, cor, contagiro, quantidadePortas, velocidadeatual, statuscarro){
    this.marca = marca;
    this.modelo = modelo;
    this.peso = peso;
    this.cor = cor;
    this.contagiro = contagiro;
    this.quantidadePortas = quantidadePortas;
    this.velocidadeatual = velocidadeatual;
    this.statuscarro = statuscarro;
}

 
const meucarro = new carro("fiat", "palio", "1000 kg", "verde", "0", "4 portas", 0, "desligado" )

function ligar() {
    meucarro.statuscarro = "Ligado";

}


ligar()


function acelerar() {
    meucarro.velocidadeatual = meucarro.velocidadeatual +10;
}
acelerar()
acelerar()
acelerar()
acelerar()
console.log(meucarro)

function frear() {
    
    if (meucarro.velocidadeatual <0) {/* condição if sempre dentro de parenteses */ 
        meucarro.velocidadeatual = 0
    } else {
        meucarro.velocidadeatual = meucarro.velocidadeatual -10;
    }
}

frear()
frear()

console.log(meucarro)

function desligado(){
    meucarro.statuscarro = "desligado";
    meucarro.velocidadeatual = 0;
}

desligado()