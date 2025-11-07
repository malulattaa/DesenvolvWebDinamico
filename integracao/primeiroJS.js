console.log("Executando pelo arquivo externo")

//document.getElementById('primeiro').style.backgroundColor = 'yellow'
let primeiro = document.getElementById('primeiro')
primeiro.style.backgroundColor = 'green'

//primeiro.remove()
function pintaAzul(){
    this.style.backgroundColor = 'blue'
}
let contando = 0

// function contar(){
//     contando+=1
//     console.log(contando)
// }
function contar(){
    let a = parseInt(this.innerHTML)|0
    this.innerHTML = ++a
}
primeiro.addEventListener('click',pintaAzul)
//primeiro.addEventListener('click', () => {primeiro.style.backgroundColor = 'blue'})
document.getElementById('segundo').addEventListener('click', pintaAzul)
// document.getElementsByClassName('quadrado').array.forEach(element => {
//     element.addEventListener('click', pintaAzul)
// });
Array.from(document.getElementsByClassName('quadrado')).forEach(element => {
    element.addEventListener('click', pintaAzul)
    element.addEventListener('click', contar)
});
// [...from(document.getElementsByClassName('quadrado')].forEach(element => {
//     element.addEventListener('click', pintaAzul)
//     element.addEventListener('click', contar)
// });
