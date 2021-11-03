const randomNumber = () => {
  return Math.floor(Math.random() * 10);
}

const upperCase = (str) => {
  return str.toUpperCase();
}

const firstLetter = (str) => {
  return str[0];
}

const concatStrings = (str1, str2) => {
  return `${str1}${str2}`;
}

module.exports = { randomNumber, upperCase, firstLetter, concatStrings };