function inserir(a){
    var tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela + a;
}

function calcular(){
    let tela = document.querySelector('.tela')
    let expressao = tela.innerHTML
    let result = eval(expressao)
    // eval é uma função nativa que lê a string e executa oq estiver escrito dentro dela
    tela.innerHTML = result
}
document.getElementById('um').addEventListener('click', () => {inserir('1')})
document.getElementById('dois').addEventListener('click', () => {inserir('2')})
document.getElementById('tres').addEventListener('click', () => {inserir('3')})
document.getElementById('quatro').addEventListener('click', () => {inserir('4')})
document.getElementById('cinco').addEventListener('click', () => {inserir('5')})
document.getElementById('seis').addEventListener('click', () => {inserir('6')})
document.getElementById('sete').addEventListener('click', () => {inserir('7')})
document.getElementById('oito').addEventListener('click', () => {inserir('8')})
document.getElementById('nove').addEventListener('click', () => {inserir('9')})
document.getElementById('zero').addEventListener('click', () => {inserir('0')})
document.getElementById('C').addEventListener('click', () => {document.querySelector('.tela').innerHTML=''})
document.getElementById('adicao').addEventListener('click', () => {inserir('+')})
document.getElementById('igual').addEventListener('click', () => {calcular()})
document.getElementById('subtracao').addEventListener('click', () => {inserir('-')})
document.getElementById('multiplicar').addEventListener('click', () => {inserir('*')})
document.getElementById('dividir').addEventListener('click', () => {inserir('/')})
document.getElementById('porcentagem').addEventListener('click', () => {inserir('%')})//arrumar
