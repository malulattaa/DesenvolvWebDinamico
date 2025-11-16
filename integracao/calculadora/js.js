const tela = document.querySelector('.tela')

const button = {
    um: '1',
    dois: '2',
    tres: '3',
    quatro: '4',
    cinco: '5',
    seis: '6',
    sete: '7',
    oito: '8',
    nove: '9',
    zero: '0',
    adicao: "+",
    subtracao: "-",
    multiplicar: "*",
    dividir: "/"

}
for (let elemento in button){
    document.getElementById(elemento).addEventListener('click', () => {inserir(button[elemento])})
}

function inserir(a){
    tela.innerHTML += a;
}

function calcular(){
    let expressao = tela.innerHTML
    let result = eval(expressao)
    // eval é uma função nativa que lê a string e executa oq estiver escrito dentro dela
    tela.innerHTML = result
}

document.getElementById('C').addEventListener('click', () => {tela.innerHTML=''})
document.getElementById('igual').addEventListener('click', () => {calcular()})

