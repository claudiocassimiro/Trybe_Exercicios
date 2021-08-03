// Exercicio 6

function isPalindrome(string) {
    let arr = string.split('');
    let arrInverted = arr.reverse();
    let stringInverted = arrInverted.join('');
    
    if (string === stringInverted) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('anilina'));

