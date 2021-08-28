const longestWord = (phase) => {
    const words = phase.split(' ');
    let longest = words[0];
    for (let index = 0; index < words.length; index += 1) {
        if (words[index].length > longest.length) {
            longest = words[index];
        }
    }
    return longest;
}

console.log(longestWord("Anabella robou a laranja da casa de Cassimiro"));