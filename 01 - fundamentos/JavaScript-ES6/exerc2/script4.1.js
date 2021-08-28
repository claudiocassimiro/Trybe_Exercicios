const findX = (phrase, string) => {
    let newPhrase = phrase.replace('x', string);

    return newPhrase;
}

console.log(findX('Eu gosto de x', 'surfar'));