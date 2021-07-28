// Exercicio 10

let custoProduto = 70;
let valorDeVenda = 140;
let custoTotal;
let lucro;
const quantVendas = 1000;

if (custoProduto < 0 || valorDeVenda < 0) {
    console.log('Insira valores validos!');
}
else {
    custoTotal = custoProduto + ((custoProduto * 20) / 100);
    lucro = valorDeVenda - custoTotal;
    console.log(`O lucro final ao vender ${quantVendas} produtos é de R$ ${quantVendas * lucro}`)
}


