// Exercicio 6

function isPalindrome(string) {
    let lowerCase = string;
    let arr = lowerCase.split('');
    let arrInverted = arr.reverse();
    let stringInverted = arrInverted.join('');
    
    if (string === stringInverted) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('anilina'));

