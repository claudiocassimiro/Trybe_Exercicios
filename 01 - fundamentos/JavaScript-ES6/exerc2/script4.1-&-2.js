const mySkills = ['HTML', 'CSS', 'JavaScript', 'Git', 'Bash'];

const findX = (phrase, string) => {
    let newPhrase = phrase.replace('x', string);

    return newPhrase;
}

let newString = findX('Eu gosto de x', 'surfar');

const mySkillsOrdened = (phrase) => {
    let newPhrase = `${phrase} e também curto: ${mySkills.sort()}.`;
    return newPhrase;
}

console.log(mySkillsOrdened(newString));