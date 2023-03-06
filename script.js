const numero = Number(prompt('Seu número é: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


        numeroTitulo.innerHTML = numero;

        texto.innerHTML = '';
        texto.innerHTML += `Raiz Quadrada: ${Math.sqrt(numero)}<br />`;
        texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br />`;
        texto.innerHTML += `${numero} é NaN: ${Number.isNaN(numero)} <br />`;
        texto.innerHTML += `Arredondamento para baixo: ${Math.floor(numero)}<br />`;
        texto.innerHTML += `Arredondamento para cima: ${Math.ceil(numero)}<br />`;
        texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br />`;