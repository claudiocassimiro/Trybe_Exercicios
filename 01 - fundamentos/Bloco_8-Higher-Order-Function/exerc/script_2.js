const sorteio = (chosen, callback) => {
    let drawn = parseInt(Math.random() * 5 + 1);

    if (callback(drawn, chosen)) {
        return 'Parabéns você ganhou!';
    }
    else {
        return `O número sorteado foi: ${drawn} Tente novamente`;
    }
}

const checkSorteio = (drawn, chosen) => {
    return drawn === chosen;
}

console.log(sorteio(3, checkSorteio));