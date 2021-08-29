const mySkills = ['HTML', 'CSS', 'JavaScript', 'Git', 'React'];

const findX = (phrase, string) => phrase.replace('x', string);

let newString = findX('Eu gosto de x', 'surfar');

const mySkillsOrdened = (phrase) => {
    let newPhrase = `${phrase} e também curto: ${mySkills.sort()}.`;
    return newPhrase;
}

console.log(mySkillsOrdened(newString));